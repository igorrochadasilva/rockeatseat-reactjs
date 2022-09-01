import axios, { AxiosError, AxiosPromise, AxiosRequestConfig } from "axios";
import { parseCookies } from "nookies";
import { signOut } from "../context/AuthContext";
import { setCookies } from "../utils/cookies";
import { AuthTokenError } from "./erros/AuthTokenError";

type AxiosErrorResponse = {
  code?: string;
};

let isRefreshing = false;
let failedRequestsQueue = [];

export function setupAPIClient(ctx = undefined) {
  let cookies = parseCookies(ctx);

  const api = axios.create({
    baseURL: "http://localhost:3333",
    headers: {
      Authorization: `Bearer ${cookies["nextauth.token"]}`,
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
      const { "nextauth.refreshToken": refreshToken } = parseCookies(ctx);
      const originalConfig = error.config;

      //valida se está fazendo o refresh do cookie
      if (!isRefreshing) {
        isRefreshing = true;
        PostRefreshToken(refreshToken);
      }

      return new Promise((resolve, reject) => {
        failedRequestsQueue.push({
          onSuccess: (token: string) =>
            resolvePromise(token, originalConfig, resolve),
          onFailure: (error: AxiosError) => rejectPromise(error, reject),
        });
      });
    } else {
      // o erro pode não ser do tipo token expirado, portanto o usuário é deslogado
      if (typeof window) {
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

        setCookies("nextauth.token", token);
        setCookies("nextauth.refreshToken", refreshToken, ctx);

        api.defaults.headers["Authorization"] = `Bearer ${token}`;
        failedRequestsQueue.forEach((request) => request.onSuccess(token));
        failedRequestsQueue = [];
      })
      .catch((error) => {
        failedRequestsQueue.forEach((request) => request.onFailure(error));
        failedRequestsQueue = [];

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
    let setupConfig = config.headers["Authorization"];
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
}
