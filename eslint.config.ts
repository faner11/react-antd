import oxlint from 'eslint-plugin-oxlint'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

import myOxlintConfig from './oxlint.config'
const config = defineConfig(
  eslintPluginUnicorn.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
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
