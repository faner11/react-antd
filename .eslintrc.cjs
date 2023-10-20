/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
  env: { browser: true },
  extends: [
    'airbnb-base',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json', 'tsconfig.node.json'],
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['import', 'simple-import-sort', 'prettier'],
  settings: {
    'import/resolver': {
      typescript: {
        directory: './tsconfig.json',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsForRegex: ['^draft'] },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'react/prop-types': 'off',
    'arrow-body-style': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  overrides: [
    {
      files: ['*.cjs', '*.mjs'],
    },
  ],
}
