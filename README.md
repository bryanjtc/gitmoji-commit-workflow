# Gitmoji Commit

> 😉 Use gitmoji commit in your workflow

# Packages

## Config

| Packages                                                          | Status                                           |
| ----------------------------------------------------------------- | ------------------------------------------------ |
| [commitlint-config-gitmoji](./packages/config)                    | [![NPM version][config-image]][config-url]       |
| [commitlint-config-gitmoji-monorepo](./packages/config-mono-repo) | TODO                                             |
| [conventional-changelog-gitmoji-config](./packages/changelog)     | [![NPM version][changelog-image]][changelog-url] |

[config-image]: http://img.shields.io/npm/v/commitlint-config-gitmoji.svg?style=flat-square&color=deepgreen&label=latest
[config-url]: http://npmjs.org/package/commitlint-config-gitmoji
[plugin-image]: http://img.shields.io/npm/v/commitlint-plugin-gitmoji.svg?style=flat-square&color=deepgreen&label=latest
[plugin-url]: http://npmjs.org/package/commitlint-plugin-gitmoji
[changelog-image]: http://img.shields.io/npm/v/conventional-changelog-gitmoji-config.svg?style=flat-square&color=deepgreen&label=latest
[changelog-url]: http://npmjs.org/package/conventional-changelog-gitmoji-config

## Helper

| Packages                                       | Status                                     | Description                           |
| ---------------------------------------------- | ------------------------------------------ | ------------------------------------- |
| [commitlint-plugin-gitmoji](./packages/plugin) | [![NPM version][plugin-image]][plugin-url] | commitlint plugin to add gitmoji rule |
| [@gitmoji/parser-opts](./packages/parser-opts) | [![NPM version][parser-image]][parser-url] | parser opts of gitmoji styles commit  |
| [@gitmoji/commit-types](./packages/commit-type) | [![NPM version][type-image]][type-url]     | gitmoji commit type                   |

<!-- npm url -->

[parser-image]: http://img.shields.io/npm/v/@gitmoji/parser-opts.svg?style=flat-square&color=deepgreen&label=latest
[parser-url]: http://npmjs.org/package/@gitmoji/parser-opts
[type-image]: http://img.shields.io/npm/v/@gitmoji/commit-types.svg?style=flat-square&color=deepgreen&label=latest
[type-url]: http://npmjs.org/package/@gitmoji/commit-types

## About this Repo

The commitlint gitmoji repo is managed as a [monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md); it's composed of many npm packages.

The original `commitlint-config-gitmoji` repo can be found in `packages/config`.

## License

[MIT](./LICENSE) ® Arvin Xu
