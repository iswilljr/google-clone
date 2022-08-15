module.exports = {
  "*.{js,jsx,ts,tsx}": () => ["yarn check", `yarn lint --fix`],
  "*": () => `yarn format`,
};
