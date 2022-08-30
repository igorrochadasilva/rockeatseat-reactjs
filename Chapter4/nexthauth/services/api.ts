import axios, { AxiosError, AxiosPromise, AxiosRequestConfig } from "axios";
import { parseCookies, setCookie } from "nookies";
import { setCookies } from "../utils/cookies";
import signOut from "../utils/signOut";

interface AxiosErrorResponse {
  code?: string;
}

let cookies = parseCookies();
let isRefreshing = false;
let failedRequestsQueue: {
  onSuccess: (token: string) => void;
  onFailure: (err: AxiosError<unknown, any>) => void;
}[] = [];

export const api = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    Authorization: `Bearer ${cookies["nextAuth.token"]}`,
  },
});

//interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError<AxiosErrorResponse>) => {
    if (error.response?.status === 401) {
      return handleRefreshToken(error);
    }
    return Promise.reject(error);
  }
);

function handleRefreshToken(error: AxiosError<AxiosErrorResponse>) {
  if (error.response?.data?.code === "token.expired") {
    const { "nextAuth.refreshToken": refreshToken } = parseCookies();
    const config = error.config;

    if (!isRefreshing) {
      isRefreshing = true;
      PostRefreshToken(refreshToken);
    }

    return new Promise((resolve, reject) => {
      failedRequestsQueue.push({
        onSuccess: (token: string) => resolvePromise(token, config, resolve),
        onFailure: (error: AxiosError) => rejectPromise(error, reject),
      });
    });
  } else {
    signOut();
  }
}

function PostRefreshToken(refreshToken: string) {
  api
    .post("/refresh", { refreshToken })
    .then((response) => {
      const { token, refreshToken } = response?.data;

      setCookies("nextAuth.token", token);
      setCookies("nextAuth.refreshToken", refreshToken);

      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      failedRequestsQueue.forEach((request) => request.onSuccess(token));
      failedRequestsQueue = [];
    })
    .catch((error) => {
      failedRequestsQueue.forEach((request) => request.onFailure(error));
      failedRequestsQueue = [];
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
  config.headers.Authorization = `Bearer ${token}`;
  resolve(api(config));
}

function rejectPromise(
  error: AxiosError,
  reject: { (reason?: any): void; (arg0: AxiosError<unknown, any>): void }
) {
  reject(error);
}
