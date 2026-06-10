import { defineConfig } from 'oxlint'

import { notDefaultInOxlint } from './scripts/eslint-not-oxlint-default.ts'
export default defineConfig({
  categories: {
    correctness: 'error',
  },
  env: {
    builtin: true,
    es2025: true,
  },
  ignorePatterns: ['dist/', 'src/api/', 'src/routeTree.gen.ts', 'schema.d.ts'],
  options: {
    typeAware: true,
    typeCheck: true,
  },
  plugins: ['react', 'import', 'react-perf', 'oxc', 'promise'],
  rules: {
    'import/consistent-type-specifier-style': 'error',
    'import/no-duplicates': 'error',
    'import/no-empty-named-blocks': 'error',
    'object-shorthand': 'error',
    'no-nested-ternary': 'off',
    'prefer-template': 'error',
    'react/button-has-type': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/no-array-index-key': 'error',
    'react/no-danger': 'error',
    'react/self-closing-comp': 'error',
    ...notDefaultInOxlint,
  },
})
