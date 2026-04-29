import { execSync } from 'node:child_process'

import { keyBy } from 'es-toolkit'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import tseslint from 'typescript-eslint'

const data = execSync('pnpm exec oxlint -c ./scripts/oxlint.ts --rules -f json', {
  encoding: 'utf-8',
})
const oxcRules = JSON.parse(data) as {
  scope: string
  value: string
  default: boolean
  type_aware: boolean
}[]
const oxcRulesMap = keyBy(oxcRules, (p) => {
  if (p.scope === 'eslint') {
    return p.value
  }
  if (p.scope === 'typescript') {
    return `@typescript-eslint/${p.value}`
  }
  return `${p.scope}/${p.value}`
})

const tsRulesArray = [...tseslint.configs.strictTypeChecked, ...tseslint.configs.stylisticTypeChecked].map(
  (item) => item.rules ?? {},
)
const tsRules = {}
for (const rulesObj of tsRulesArray) {
  Object.assign(tsRules, rulesObj)
}
const list = Object.keys({ ...tsRules, ...eslintPluginUnicorn.configs.recommended.rules })
  .filter((key) => oxcRulesMap[key] == null)
  .filter(Boolean)
  .map((key) => key.replace(/^@typescript-eslint/, 'typescript'))

console.log(list)
