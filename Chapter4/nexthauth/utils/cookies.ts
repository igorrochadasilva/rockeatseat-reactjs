import { GetServerSidePropsContext } from "next";
import { setCookie } from "nookies";

export function setCookies(
  name: string,
  value: string,
  ctx?: GetServerSidePropsContext | undefined
) {
  console.log("criando cookie 😎");
  setCookie((ctx = undefined), name, value, {
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });
}
