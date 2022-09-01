import { setupAPIClient } from "../services/api";
import { withSSRauth } from "../utils/withSSRauth";

export default function Metrics() {
  return (
    <>
      <div>Métricas</div>
    </>
  );
}

export const getServerSideProps = withSSRauth(
  async (ctx) => {
    const apiClient = setupAPIClient(ctx);
    const response = await apiClient.get("/me");

    return {
      props: {},
    };
  },
  {
    permissions: ["metrics.list3"],
    roles: ["administrator"],
  }
);
