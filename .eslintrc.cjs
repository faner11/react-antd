/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  env: { browser: true },
  extends: [
    'airbnb-base',
    'eslint-config-airbnb/rules/react',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  parserOptions: {
    project: ['tsconfig.json', 'tsconfig.node.json'],
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'simple-import-sort', 'prettier'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsForRegex: ['^draft'] },
    ],
    'react/require-default-props': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  overrides: [
    {
      files: ['*.cjs', '*.mjs'],
    },
  ],
}
