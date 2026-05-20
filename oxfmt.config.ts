import { defineConfig } from 'oxfmt'

export default defineConfig({
  printWidth: 120,
  singleQuote: true,
  semi: false,
  ignorePatterns: ['**/dist/**', '**/src/api/**', '**/src/routeTree.gen.ts', '**/schema.d.ts', 'pnpm-lock.yaml'],
  sortImports: true,
  sortTailwindcss: true,
})
