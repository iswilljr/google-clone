import type { PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";
import { search } from "./search";

export const load: PageServerLoad = async (ctx) => {
  const query = ctx.url.searchParams.get("q");
  const start = +(ctx.url.searchParams.get("start") || 0);

  if (!query) throw redirect(307, "/");

  const response = await search(query, start);
  const results = await response.json();

  if (response.status === 404) throw redirect(307, "/");

  console.log(`[${response.status}] ${response.url}`);

  return {
    status: response.status,
    results,
    query,
  };
};
