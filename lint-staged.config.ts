export default {
  '*.{js,ts,cjs,mjs,d.cts,d.mts,jsx,tsx,json,jsonc}': ['pnpm run format'],
  '**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}': ['oxlint', 'eslint'],
}
