module.exports = {
  "*.{js,jsx,ts,tsx,svelte,md}": () => ["pnpm run check", "pnpm lint --fix"],
  "*": () => "pnpm format",
};
