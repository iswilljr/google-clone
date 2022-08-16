import { goto } from "$app/navigation";

export function search(form: HTMLFormElement) {
  async function handle_submit(e: SubmitEvent) {
    e.preventDefault();
    const data = new FormData(form);
    const query = data.get("q");
    if (!query) return;
    goto(`/search?q=${data.get("q")}`);
  }

  form.addEventListener("submit", handle_submit);

  return {
    destroy: () => form.removeEventListener("submit", handle_submit),
  };
}
