import eslint from '@eslint/js'
import biome from 'eslint-config-sync-biome'
import importPluginX from 'eslint-plugin-import-x'
import reactRefresh from 'eslint-plugin-react-refresh'
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
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      'react-refresh': reactRefresh,
      'import-x': importPluginX,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'react-refresh/only-export-components': ['warn', { allowExportNames: ['loader', 'action'] }],
      'object-shorthand': 'warn',
      'import-x/consistent-type-specifier-style': 'error',
    },
  },
  {
    ignores: ['dist/', 'src/api/', 'src/api-go/'],
  },
  biome.configs['flat/recommended'],
)
