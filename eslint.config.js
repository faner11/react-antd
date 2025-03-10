import eslint from '@eslint/js'
import biome from 'eslint-config-biome'
import importPluginX from 'eslint-plugin-import-x'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
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
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'object-shorthand': 'warn',
      'import-x/consistent-type-specifier-style': 'error',
    },
  },
  {
    ignores: ['dist/', 'src/api/', 'src/routeTree.gen.ts'],
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  biome,
)
