import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { destroyCookie, parseCookies } from "nookies";
import { AuthTokenError } from "../services/erros/AuthTokenError";

export function withSSRauth<P>(fn: GetServerSideProps<P>) {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx);
    const token = cookies["nextAuth.token"];
    //valida se token existe
    if (!token) {
      console.log("token não existe", token);
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    try {
      console.log("chamou a função");
      return await fn(ctx);
    } catch (err) {
      console.log("erro com o token", token);
      if (err instanceof AuthTokenError) {
        destroyCookie(ctx, "nextAuth.token");
        destroyCookie(ctx, "nextAuth.refresh");
        return {
          redirect: {
            destination: "/",
            permanent: false,
          },
        };
      }
    }
  };
}
