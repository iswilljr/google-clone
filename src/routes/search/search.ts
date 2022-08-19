/* eslint-disable @typescript-eslint/promise-function-async */
import { API_KEY, CTX } from "$env/static/private";

const base = "https://www.googleapis.com/customsearch/v1";

export function search(query: string, start = 0) {
  if (!query) throw new Error("Query is required");

  return fetch(`${base}?key=${API_KEY}&q=${query}&start=${start}&cx=${CTX}`);
}
