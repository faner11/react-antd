import packageJson from './package.json' with { type: 'json' }

/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: ['master'],
  plugins: [
    '@semantic-release/commit-analyzer',
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'conventionalcommits',
        host: 'https://cn-north-1.console.amazonaws.cn',
        presetConfig: {
          commitUrlFormat: `{{host}}/codesuite/codecommit/repositories/${packageJson.name}/commit/{{hash}}`,
          compareUrlFormat: `{{host}}/codesuite/codecommit/repositories/${packageJson.name}/compare/refs/tags/{{previousTag}}/.../refs/tags/{{currentTag}}`,
        },
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogTitle: `# ${packageJson.name.toUpperCase()} 更新日志`,
      },
    ],
    '@semantic-release/npm',
    '@semantic-release/git',
  ],
}
