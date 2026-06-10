import { execSync } from 'node:child_process'

import eslintJs from '@eslint/js'
import { keyBy } from 'es-toolkit'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import tseslint from 'typescript-eslint'

// 1. 获取 OxLint 所有规则及其默认状态
const oxcRules = JSON.parse(
  execSync('pnpm exec oxlint -c ./scripts/oxlint.ts --rules -f json', { encoding: 'utf8' }),
) as { scope: string; value: string; default: boolean }[]

const oxcRulesMap = keyBy(oxcRules, (r) =>
  r.scope === 'eslint' ? r.value : `${r.scope === 'typescript' ? '@typescript-eslint' : r.scope}/${r.value}`,
)

// 2. 收集所有推荐规则（eslint + tseslint + unicorn）
const rulesSources = [
  eslintJs.configs.recommended.rules,
  ...[...tseslint.configs.strictTypeChecked, ...tseslint.configs.stylisticTypeChecked].map((c) => c.rules),
  eslintPluginUnicorn.configs.recommended.rules,
]
const eslintRecommendedRules = Object.fromEntries(
  rulesSources.filter(Boolean).flatMap((r) => Object.entries(r as never)),
)

// 3. 过滤：OxLint 支持但默认未启用的规则（排除 unicorn 和 off）
export const notDefaultInOxlint = Object.fromEntries(
  Object.entries(eslintRecommendedRules)
    .filter(([name, severity]) => {
      const oxc = oxcRulesMap[name]
      return oxc?.default === false && severity
    })
    .map(([name, severity]) => [name.replace('@typescript-eslint/', 'typescript/'), severity]),
)
