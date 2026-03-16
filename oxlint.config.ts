import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import { defineConfig } from 'oxlint'
import tseslint from 'typescript-eslint'
const tsRulesArray = [...tseslint.configs.strictTypeChecked, ...tseslint.configs.stylisticTypeChecked].map(
  (item) => item.rules ?? {},
)
const tsRules = {}
for (const rulesObj of tsRulesArray) {
  Object.assign(tsRules, rulesObj)
}
export default defineConfig({
  plugins: ['typescript', 'unicorn', 'react', 'import', 'react-perf', 'oxc', 'promise'],
  categories: {
    correctness: 'error',
  },
  env: {
    builtin: true,
    es2025: true,
  },
  options: {
    typeCheck: true,
    typeAware: true,
  },
  ignorePatterns: ['dist/', 'src/api/', 'src/routeTree.gen.ts', 'schema.d.ts'],
  rules: {
    'no-case-declarations': 'error',
    'no-empty': 'error',
    'no-fallthrough': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-unexpected-multiline': 'error',
    'no-negated-condition': 'off',
    'no-nested-ternary': 'off',
    'react/no-array-index-key': 'error',
    'react/button-has-type': 'error',
    'react/no-danger': 'error',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/self-closing-comp': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-curly-brace-presence': 'error',
    'typescript/consistent-type-imports': 'error',
    'import/no-empty-named-blocks': 'error',
    'import/no-duplicates': 'error',
    ...eslintPluginUnicorn.configs.recommended.rules,
    ...tsRules,
  },
})
