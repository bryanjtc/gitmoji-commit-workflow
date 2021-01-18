const path = require('path');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  moduleNameMapper: {
    'commitlint-plugin-gitmoji': '<rootDir>/packages/plugin/src',
    '@gitmoji/parser-opts': '<rootDir>/packages/parser-opts/src',
    '@gitmoji/commit-types': '<rootDir>/packages/commit-type/src',
  },
  rootDir: path.resolve(__dirname, '.'),
};
