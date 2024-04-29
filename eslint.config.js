import eslint from '@eslint/js'
import biome from 'eslint-config-sync-biome'
import reactRefresh from 'eslint-plugin-react-refresh'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
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
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      'simple-import-sort': simpleImportSort,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      'react-refresh': reactRefresh,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'react-refresh/only-export-components': ['warn', { allowExportNames: ['loader', 'action'] }],
      'object-shorthand': 'warn',
    },
  },
  {
    ignores: ['dist/', 'src/api/', 'src/api-go/'],
  },
  biome.configs['flat/recommended'],
)
