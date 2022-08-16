import { api } from "./_api";
import type { Load } from "./__types";

export const load: Load = async (ctx) => {
  const query = ctx.url.searchParams.get("q");
  console.log({ query });
  if (!query) return { body: {}, props: { data: {} } };
  const response = await api(query);

  console.log(await response.json());

  if (response.status === 404) {
    return {
      body: {},
      props: { data: {} },
    };
  }

  if (response.status === 200) {
    return {
      body: {},
      props: { data: {} },
    };
  }

  return {
    status: response.status,
    props: { data: {} },
  };
};
