// eslint-disable-next-line @typescript-eslint/no-var-requires
const prettierConfigStandard = require('prettier-config-standard')

module.exports = {
  ...prettierConfigStandard,
  jsxSingleQuote: true,
  trailingComma: 'all',
  printWidth: 120,
}
