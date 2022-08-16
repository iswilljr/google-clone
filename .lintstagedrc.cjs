module.exports = {
  "*.{js,jsx,ts,tsx}": () => ["yarn run check", `yarn lint --fix`],
  "*": () => `yarn format`,
};
