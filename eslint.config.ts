import eslint from '@eslint/js'
import oxlint from 'eslint-plugin-oxlint'
import perfectionist from 'eslint-plugin-perfectionist'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

const config = defineConfig(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  eslintPluginUnicorn.configs.recommended,
  perfectionist.configs['recommended-natural'],
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      sourceType: 'module',
    },
  },
  {
    rules: {
      'object-shorthand': 'warn',
      'perfectionist/sort-objects': [
        'error',
        {
          type: 'unsorted',
          useConfigurationIf: {
            callingFunctionNamePattern: ['createRootRouteWithContext', 'createFileRoute'],
          },
        },
      ],
      'prefer-template': 'warn',
      'unicorn/prevent-abbreviations': 'off',
    },
  },
  {
    // To generate oxlint
    rules: {
      'import/no-duplicates': 'error',
      // 'react/jsx-fragments': 'error',
      // "@typescript-eslint/consistent-type-imports": "error",
      'import/no-empty-named-blocks': 'error',
      'react/button-has-type': 'error',
      'react/jsx-boolean-value': 'error',
      'react/jsx-curly-brace-presence': 'error',
      'react/jsx-no-comment-textnodes': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/no-array-index-key': 'error',
      'react/no-danger': 'error',
      'react/self-closing-comp': 'error',
    },
  },
  {
    ignores: ['dist/', 'src/api/', 'src/routeTree.gen.ts', 'src/comm/openapi/schema.d.ts'],
  },
  ...oxlint.buildFromOxlintConfigFile('./.oxlintrc.json'),
)

export default config
