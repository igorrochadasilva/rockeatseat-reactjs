import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { setupAPIClient } from "../services/api";
import { api } from "../services/apiClient";
import { withSSRauth } from "../utils/withSSRauth";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  // useEffect(() => {
  //   api.get("/me").then((response) => console.log(response));
  // }, []);

  return <h1>Dashboard: {user?.email}</h1>;
}

export const getServerSideProps = withSSRauth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get("/me");
  console.log(response.data);
  return {
    props: {},
  };
});
