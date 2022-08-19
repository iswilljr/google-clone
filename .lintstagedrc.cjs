module.exports = {
  "*.{js,jsx,ts,tsx,svelte,md}": () => ["yarn run check", "yarn lint --fix"],
  "*": () => "yarn format",
};
