import eslint from '@eslint/js'
import { defineConfig } from 'eslint/config'
import oxlint from 'eslint-plugin-oxlint'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import tseslint from 'typescript-eslint'

const config = defineConfig(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  eslintPluginUnicorn.configs.recommended,
  {
    languageOptions: {
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'prefer-template': 'warn',
      'object-shorthand': 'warn',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'unicorn/prevent-abbreviations': 'off',
    },
  },
  {
    // To generate oxlint
    rules: {
      'react/no-array-index-key': 'error',
      'react/button-has-type': 'error',
      'react/no-danger': 'error',
      'react/jsx-no-comment-textnodes': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/self-closing-comp': 'error',
      'react/jsx-boolean-value': 'error',
      'react/jsx-curly-brace-presence': 'error',
      // 'react/jsx-fragments': 'error',
      // "@typescript-eslint/consistent-type-imports": "error",
      'import/no-empty-named-blocks': 'error',
      'import/no-duplicates': 'error',
    },
  },
  {
    ignores: ['dist/', 'src/api/', 'src/routeTree.gen.ts', 'schema.d.ts'],
  },
  ...oxlint.buildFromOxlintConfigFile('./.oxlintrc.json'),
)

export default config
