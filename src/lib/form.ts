import { goto } from "$app/navigation";

export function search(form: HTMLFormElement) {
  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    const data = new FormData(form);
    const query = data.get("q");
    if (!query) return;
    // eslint-disable-next-line @typescript-eslint/no-base-to-string
    goto(`/search?q=${query.toString()}`).catch(console.error);
  }

  form.addEventListener("submit", handleSubmit);

  return {
    // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
    destroy: () => form.removeEventListener("submit", handleSubmit),
  };
}
