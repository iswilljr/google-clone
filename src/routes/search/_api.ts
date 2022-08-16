const base = "https://www.googleapis.com/customsearch/v1";

const apiKey = import.meta.env.API_KEY;
const ctx = import.meta.env.CTX;

export function api(query: string) {
  return fetch(`${base}?key=${apiKey}&cx=${ctx}&q=${query}`);
}
