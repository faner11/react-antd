import eslint from '@eslint/js'
import oxlint from 'eslint-plugin-oxlint'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

import myOxlintConfig from './oxlint.config'
const config = defineConfig(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  eslintPluginUnicorn.configs.recommended,
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
      'unicorn/prevent-abbreviations': 'off',
    },
  },
  {
    ignores: ['dist/', 'src/api/', 'src/routeTree.gen.ts', 'src/comm/openapi/schema.d.ts'],
  },
  ...oxlint.buildFromOxlintConfig(myOxlintConfig),
)

export default config
