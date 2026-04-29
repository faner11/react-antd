import { defineConfig } from 'oxlint'

export default defineConfig({
  categories: {
    correctness: 'error',
  },
  env: {
    builtin: true,
    es2025: true,
  },
  options: {
    typeAware: true,
    typeCheck: true,
  },
  plugins: ['react', 'import', 'react-perf', 'oxc', 'promise'],
})
