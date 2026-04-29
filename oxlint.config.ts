import { omit } from 'es-toolkit'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import { defineConfig } from 'oxlint'
import tseslint from 'typescript-eslint'
const tsRulesArray = [...tseslint.configs.strictTypeChecked, ...tseslint.configs.stylisticTypeChecked].map(
  (item) => item.rules ?? {},
)
const myRules = {}
for (const rulesObj of [...tsRulesArray, eslintPluginUnicorn.configs.recommended.rules]) {
  Object.assign(myRules, rulesObj)
}

const result = omit(myRules, [
  'no-dupe-args',
  'no-new-symbol',
  'typescript/no-array-constructor',
  'no-implied-eval',
  'typescript/no-unused-expressions',
  'typescript/no-unused-vars',
  'typescript/no-useless-constructor',
  'no-return-await',
  'dot-notation',
  'typescript/no-empty-function',
  'unicorn/better-regex',
  'unicorn/consistent-destructuring',
  'unicorn/expiring-todo-comments',
  'unicorn/import-style',
  'unicorn/isolated-functions',
  'unicorn/no-for-loop',
  'unicorn/no-keyword-prefix',
  'unicorn/no-named-default',
  'unicorn/no-negated-condition',
  'unicorn/no-unnecessary-polyfills',
  'unicorn/no-unused-properties',
  'unicorn/prefer-export-from',
  'unicorn/prefer-json-parse-buffer',
  'unicorn/prefer-simple-condition-first',
  'unicorn/prefer-single-call',
  'unicorn/prefer-switch',
  'unicorn/prevent-abbreviations',
  'unicorn/string-content',
  'unicorn/template-indent',
] as never)

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
    'no-case-declarations': 'error',
    'no-empty': 'error',
    'no-fallthrough': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-unexpected-multiline': 'error',
    'object-shorthand': 'error',
    'prefer-template': 'error',
    'react/button-has-type': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/no-array-index-key': 'error',
    'react/no-danger': 'error',
    'react/self-closing-comp': 'error',
    ...result,
  },
})
