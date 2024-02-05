module.exports = {
  semi: false,
  tabWidth: 2,
  trailingComma: "all",
  singleQuote: true,
  useTabs: false,
  printWidth: 100,
  endOfLine: "auto",
  overrides: [
    {
      files: ".editorconfig",
      options: { parser: "yaml" },
    },
    {
      files: "LICENSE",
      options: { parser: "markdown" },
    },
  ],
}
