import axios, { AxiosError, AxiosPromise, AxiosRequestConfig } from "axios";
import { parseCookies } from "nookies";
import { setCookies } from "../utils/cookies";
import signOut from "../utils/signOut";
import { AuthTokenError } from "./erros/AuthTokenError";

let isRefreshing = false;
let failedRequestQueue: {
  onSuccess: (token: string) => void;
  onFailure: (err: AxiosError<unknown, any>) => void;
}[] = [];

type AxiosErrorResponse = {
  code?: string;
};

export const setupAPIClient = (ctx = undefined) => {
  let cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: "http://localhost:3333",
    headers: {
      Authorization: `Bearer ${cookies["nextAuth.token"]}`,
    },
  });

  api.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError<AxiosErrorResponse>) => {
      if (error?.response?.status === 401) {
        handleRefreshToken(error);
      }
      return Promise.reject(error);
    }
  );

  function handleRefreshToken(error: AxiosError<AxiosErrorResponse>) {
    if (error.response?.data?.code === "token.expired") {
      const { "nextAuth.refreshToken": refreshToken } = parseCookies(ctx);
      const config = error.config;

      if (!isRefreshing) {
        isRefreshing = true;
        PostRefreshToken(refreshToken);
      }

      return new Promise((resolve, reject) => {
        failedRequestQueue.push({
          onSuccess: (token: string) => resolvePromise(token, config, resolve),
          onFailure: (error: AxiosError) => rejectPromise(error, reject),
        });
      });
    } else {
      // o erro pode não ser do tipo token expirado, portanto o usuário é deslogado
      if (typeof window) {
        console.log("se estiver no window e o token está expirado");
        // Verifia se está no browser. Ele só faz o logout usando a função signOut, se estiver no cliente(browser).
        signOut();
      } else {
        return Promise.reject(new AuthTokenError());
      }
    }
  }

  function PostRefreshToken(refreshToken: string) {
    api
      .post("/refresh", { refreshToken })
      .then((response) => {
        const { token, refreshToken } = response?.data;

        setCookies("nextAuth.token", token);
        setCookies("nextAuth.refreshToken", refreshToken, ctx);

        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        failedRequestQueue.forEach((request) => request.onSuccess(token));
        failedRequestQueue = [];
      })
      .catch((error) => {
        failedRequestQueue.forEach((request) => request.onFailure(error));
        failedRequestQueue = [];

        if (typeof window) {
          signOut();
        }
      })
      .finally(() => {
        isRefreshing = false;
      });
  }

  function resolvePromise(
    token: string,
    config: AxiosRequestConfig,
    resolve: { (value: unknown): void; (arg0: AxiosPromise<any>): void }
  ) {
    let setupConfig = config.headers?.Authorization;
    setupConfig = `Bearer ${token}`;
    resolve(api(setupConfig));
  }

  function rejectPromise(
    error: AxiosError,
    reject: { (reason?: any): void; (arg0: AxiosError<unknown, any>): void }
  ) {
    reject(error);
  }

  return api;
};
