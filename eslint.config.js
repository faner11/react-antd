import eslint from '@eslint/js'
import biome from 'eslint-config-biome'
import importPluginX from 'eslint-plugin-import-x'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import tseslint from 'typescript-eslint'

export default tseslint.config(
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
    },
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      'import-x': importPluginX,
    },
    rules: {
      'object-shorthand': 'warn',
      'import-x/consistent-type-specifier-style': 'error',
      'import-x/no-empty-named-blocks': 'error',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-useless-promise-resolve-reject': 'off',
    },
  },
  {
    ignores: ['dist/', 'src/api/', 'src/routeTree.gen.ts'],
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  biome,
  {
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },
)
