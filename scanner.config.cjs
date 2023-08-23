/* eslint-disable import/no-unresolved */
const fs = require('fs');
const chalk = require('chalk');

module.exports = {
  input: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.spec.{js,jsx}',
    '!src/i18n/**',
    '!**/node_modules/**',
  ],
  output: './',
  options: {
    debug: true,
    func: {
      list: ['i18next.t', 'i18n.t', 't'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    trans: {
      component: 'Trans',
      i18nKey: 'i18nKey',
      defaultsKey: 'defaults',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      fallbackKey(ns, value) {
        return value;
      },
      supportBasicHtmlNodes: true,
      keepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'], // Which nodes are allowed to be kept in translations during defaultValue generation of <Trans>.

      // https://github.com/acornjs/acorn/tree/master/acorn#interface
      acorn: {
        ecmaVersion: 2020,
        sourceType: 'module', // defaults to 'module'
      },
    },
    lngs: ['zh', 'pt'],
    ns: ['translation'],
    defaultLng: 'en',
    defaultNs: 'translation',
    defaultValue: null,
    resource: {
      loadPath: 'public/locales/{{lng}}/{{ns}}.json',
      savePath: 'public/locales/{{lng}}/{{ns}}.json',
      jsonIndent: 2,
      lineEnding: '\n',
    },
    nsSeparator: false, // namespace separator
    keySeparator: false, // key separator
    interpolation: {
      prefix: '{{',
      suffix: '}}',
    },
    metadata: {},
    allowDynamicKeys: false,
  },
  transform: function customTransform(file, enc, done) {
    const { parser } = this;
    const content = fs.readFileSync(file.path, enc);
    let count = 0;

    parser.parseFuncFromString(
      content,
      { list: ['i18next._', 'i18next.__'] },
      (key, options) => {
        parser.set(
          key,
          {
            ...options,
            nsSeparator: false,
            keySeparator: false,
          },
        );
        count += 1;
      },
    );

    if (count > 0) {
      // eslint-disable-next-line no-console
      console.log(
        `i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(
          JSON.stringify(file.relative),
        )}`,
      );
    }

    done();
  },
};
