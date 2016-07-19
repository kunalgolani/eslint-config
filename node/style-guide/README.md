## Pluggable [ESLint](http://eslint.org/docs/about/) [config](http://eslint.org/docs/developer-guide/shareable-configs) for [Node.js](nodejs.org) that you can import, extend and override

### Node.js Style Guide: for Consistency, Readability and more Brevity

#### Usage

In your js project directory:

```shell
npm install --save-dev eslint-config-node
```

And in your `.eslintrc.yaml`:

```yaml
---
  extends:
    - node/style-guide
```

Alternatively, in your `.eslintrc.js` or `.eslintrc.json`:

```json
{
  "extends": ["node/style-guide"]
}
```

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

This config is biased and opinionated, and errs on the side of too many rules instead of too few. Think of this as a superset of your repo's lint config, and discard what you don't like in it. It's easy to override and disable the rules you find inconvenient.

```yaml
---
  extends: esnext/style-guide
```

includes rules from [eslint-config-esnext/style-guide](https://github.com/kunalgolani/eslint-config/tree/master/esnext/style-guide)
