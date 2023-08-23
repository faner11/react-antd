/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  env: { browser: true },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:react/jsx-runtime",
  ],
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.node.json"],
  },
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["import", 'simple-import-sort'],
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    "no-param-reassign": [
      "error",
      { props: true, ignorePropertyModificationsForRegex: ["^draft"] },
    ],
    "react/require-default-props": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
  },
  overrides: [{
    files: ["*.cjs", "*.mjs"],
  }]
};
