## eslint-config

### Pluggable [ESLint](http://eslint.org/docs/about/) [configs](http://eslint.org/docs/developer-guide/shareable-configs) for [ECMAScript Next](kangax.github.io/compat-table/esnext), [Node.js](nodejs.org) and [React Native](facebook.github.io/react-native) that you can import, extend and override

[![Join the chat at https://gitter.im/kunalgolani/eslint-config ][gitter-img]][gitter-url]
[![npm version][version-img]][npm-url]
[![npm downloads][downloads-img]][npm-url]
[![GitHub issues][issues-img]][issues-url]
[![Deps][deps-img]][deps-url]
[![Dev Deps][devDeps-img]][deps-url]


#### Usage

In your js project directory:

```shell
npm install --save-dev eslint-config-recommended
```

Choose the configs you want to include in your `.eslintrc.yaml`:

```yaml
---
  extends:
    - recommended/esnext
    - recommended/esnext/style-guide
    - recommended/node
    - recommended/node/style-guide
    - recommended/react-native
    - recommended/react-native/style-guide
```

Alternatively, in your `.eslintrc.js` or `.eslintrc.json`:

```json
{
  "extends": [
    "recommended/esnext",
    "recommended/esnext/style-guide",
    "recommended/node",
    "recommended/node/style-guide",
    "recommended/react-native",
    "recommended/react-native/style-guide"
  ]
}
```

`recommended/node` and `recommended/react-native` extend `recommended/esnext`

`recommended/node/style-guide` and `recommended/react-native/style-guide` extend `recommended/esnext/style-guide`

If you don't need all these configs, you can also install them individually:
- [ESNext](https://github.com/kunalgolani/eslint-config/tree/master/esnext)
- [Node.js](https://github.com/kunalgolani/eslint-config/tree/master/node)
- [React Native](https://github.com/kunalgolani/eslint-config/tree/master/react-native)

To add a git-hook to your commits, consider using [husky](https://github.com/typicode/husky)

```shell
npm install --save-dev husky
```

And in your `package.json`:

```json
  "scripts": {
    "precommit": "eslint ."
  }
```

---

#### Config

These configs are biased and opinionated, and err on the side of too many rules instead of too few. Think of them as a superset of your repo's lint config, and discard what you don't like in them. It's easy to override and disable the rules you find inconvenient.

- [ESNext](https://github.com/kunalgolani/eslint-config/tree/master/esnext)
- [ESNext Style Guide](https://github.com/kunalgolani/eslint-config/tree/master/esnext/style-guide)
- [Node.js](https://github.com/kunalgolani/eslint-config/tree/master/node)
- [Node.js Style Guide](https://github.com/kunalgolani/eslint-config/tree/master/node/style-guide)
- [React Native](https://github.com/kunalgolani/eslint-config/tree/master/react-native)
- [React Native Style Guide](https://github.com/kunalgolani/eslint-config/tree/master/react-native/style-guide)


[gitter-img]: https://badges.gitter.im/kunalgolani/eslint-config.svg
[gitter-url]: https://gitter.im/kunalgolani/eslint-config?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge
[version-img]: https://img.shields.io/npm/v/eslint-config-recommended.svg
[npm-url]: https://www.npmjs.com/package/eslint-config-recommended
[downloads-img]: https://img.shields.io/npm/dt/eslint-config-recommended.svg
[issues-img]: https://img.shields.io/github/issues-raw/kunalgolani/eslint-config.svg?maxAge=2592000
[issues-url]: https://github.com/kunalgolani/eslint-config/issues
[deps-img]: https://img.shields.io/david/kunalgolani/eslint-config.svg
[devDeps-img]: https://img.shields.io/david/dev/kunalgolani/eslint-config.svg
[deps-url]: https://github.com/kunalgolani/eslint-config/blob/master/package.json