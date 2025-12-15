export default {
  '**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}': ['oxlint', 'eslint'],
  '*.{js,ts,cjs,mjs,d.cts,d.mts,jsx,tsx,json,jsonc}': ['pnpm run format'],
}
