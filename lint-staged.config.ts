export default {
  '*': 'oxfmt --no-error-on-unmatched-pattern',
  '*.{js,jsx,ts,tsx,mjs,cjs}': ['oxlint'],
}
