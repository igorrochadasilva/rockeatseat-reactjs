import { setCookie } from "nookies";

export function setCookies(name: string, value: string) {
  setCookie(undefined, `${name}`, value, {
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });
}
