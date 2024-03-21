import { readFileSync } from "node:fs"
import colors from "picocolors"

// get $1 from commit-msg script
const msgPath = process.argv[2]
const msg = readFileSync(msgPath, "utf-8").trim()

const releaseRe = /^v\d/
const commitRe =
  /^(?:revert: )?(?:feat|fix|docs|dx|refactor|perf|test|workflow|build|ci|chore|types|wip|release|RELEASING|deps)(?:\(.+\))?!?: .{1,50}/

// biome-ignore lint/complexity/useSimplifiedLogicExpression: <explanation>
if (!releaseRe.test(msg) && !commitRe.test(msg)) {
  console.info()
  console.error(
    `  ${colors.bgRed(colors.white(" ERROR "))} ${colors.red("invalid commit message format.")}\n\n${colors.red(
      "  Proper commit message format is required for automated changelog generation. Examples:\n\n",
    )}    ${colors.green("feat: add 'comments' option")}\n` +
      `    ${colors.green("fix: handle events on blur (close #28)")}\n\n${colors.red(
        "  See .github/commit-convention.md for more details.\n",
      )}`,
  )
  process.exit(1)
}
