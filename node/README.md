## Pluggable [eslint](http://eslint.org/docs/about/) [config](http://eslint.org/docs/developer-guide/shareable-configs) for [Node.js](nodejs.org) that you can import, extend and override

#### Usage

In your js project directory:

```shell
npm install --save-dev eslint-config-node
```

And in your `.eslintrc.yaml`:

```yaml
---
  extends:
    - node
    - node/style-guide #optional
```

Alternatively, in your `.eslintrc.js` or `.eslintrc.json`:

```json
{
  "extends": ["node", "node/style-guide"]
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

#### safety checks and best practices supporting commonly used ESNext features with a bias toward code concision / brevity

```yaml
  env:
    node: true
```

[enables](http://eslint.org/docs/user-guide/configuring#specifying-environments) node.js features and global variables

```yaml
  extends: esnext
```

includes rules from [eslint-config-esnext](https://github.com/kunalgolani/eslint-config/tree/master/esnext#safety-checks-and-best-practices-supporting-commonly-used-esnext-features-with-a-bias-toward-code-concision--brevity)

```yaml
  rules:
```

selected [from here](http://eslint.org/docs/rules/#nodejs-and-commonjs), configured to:

- [`no-path-concat`](http://eslint.org/docs/rules/no-path-concat): disallow string concatenation with `__dirname` and `__filename`
- [`no-process-exit`](http://eslint.org/docs/rules/no-process-exit): disallow the use of `process.exit()`
- [`no-sync`](http://eslint.org/docs/rules/no-sync): disallow synchronous methods; set to warn only

---

#### style-guide: for consistency, readability and more brevity

```yaml
---
  extends: esnext/style-guide
```

includes rules from [eslint-config-esnext](https://github.com/kunalgolani/eslint-config/tree/master/esnext#style-guide-for-consistency-readability-and-more-brevity)
