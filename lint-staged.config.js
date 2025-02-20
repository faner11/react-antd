export default {
  '*': ['biome check --no-errors-on-unmatched --files-ignore-unknown=true'],
  '*.{js,jsx,ts,tsx,cjs,mjs}': ['eslint --cache'],
}
