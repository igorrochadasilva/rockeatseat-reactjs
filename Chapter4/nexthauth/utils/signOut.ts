import Router from "next/router";
import { destroyCookie } from "nookies";

export default function signOut() {
  console.log("signOut 😁");
  destroyCookie(undefined, "nextAuth.token");
  destroyCookie(undefined, "nextAuth.refreshToken");
  Router.push("/");
}
