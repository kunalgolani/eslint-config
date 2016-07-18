## Pluggable [ESLint](http://eslint.org/docs/about/) [config](http://eslint.org/docs/developer-guide/shareable-configs) for [React Native](facebook.github.io/react-native) that you can import, extend and override

#### Usage

In your js project directory:

```shell
npm install --save-dev eslint-config-react-native
```

And in your `.eslintrc.yaml`:

```yaml
---
  extends:
    - react-native
    - react-native/style-guide #optional
```

Alternatively, in your `.eslintrc.js` or `.eslintrc.json`:

```json
{
  "extends": ["react-native", "react-native/style-guide"]
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
  plugins:
    - react
    - react-native
```

provides [React](https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules), [JSX](https://github.com/yannickcr/eslint-plugin-react#jsx-specific-rules) and [React Native](https://github.com/intellicode/eslint-plugin-react-native#list-of-supported-rules) specific rules

```yaml
  extends:
    - esnext
    - plugin:react/recommended
```

[enables](http://eslint.org/docs/user-guide/configuring#specifying-environments) `jsx` parsing, includes rules from [eslint-config-esnext](https://github.com/kunalgolani/eslint-config/tree/master/esnext#safety-checks-and-best-practices-supporting-commonly-used-esnext-features-with-a-bias-toward-code-concision--brevity) and the following [react-specific recommended rules](https://github.com/yannickcr/eslint-plugin-react#recommended-configuration.md):

- [`react/display-name`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md): prevent missing `displayName` in a React component definition
- [`react/jsx-no-duplicate-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md): prevent duplicate properties in JSX components
- [`react/jsx-no-undef`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md): disallow undeclared variables as JSX components
- [`react/jsx-uses-react`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md): prevent React from being marked as unused in a file using JSX
- [`react/jsx-uses-vars`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md): prevent variables used in JSX to be incorrectly marked as unused
- [`react/no-danger`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md): prevent usage of `dangerouslySetInnerHTML`
- [`react/no-deprecated`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md): prevent usage of deprecated methods
- [`react/no-did-mount-set-state`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md): prevent usage of `setState` in `componentDidMount`, but allow inside callbacks
- [`react/no-did-update-set-state`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md): prevent usage of `setState` in `componentDidUpdate`, but allow inside callbacks
- [`react/no-direct-mutation-state`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md): prevent direct mutation of `this.state`
- [`react/no-is-mounted`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md): prevent usage of `isMounted`
- [`react/no-unknown-property`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md): prevent usage of unknown DOM property
- [`react/prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md): prevent missing props validation in a React component definition
- [`react/react-in-jsx-scope`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md): prevent missing `React` when using JSX

```yaml
  rules:
```

selected [from here](https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules), configured to:

- [`react-native/no-color-literals`](https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-color-literals.md): detect `StyleSheet` rules and inline styles containing color literals instead of variables
- [`react-native/no-inline-styles`](https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-inline-styles.md): detect JSX components with inline styles that contain literal values
- [`react-native/no-unused-styles`](https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/no-unused-styles.md): detect unused `StyleSheet` rules
- [`react-native/split-platform-components`](https://github.com/Intellicode/eslint-plugin-react-native/blob/master/docs/rules/split-platform-components.md): enforce using platform specific filenames when necessary
- [`react/jsx-boolean-value`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md): prefer shorthand if an attribute has a `true` value in JSX
- [`react/jsx-handler-names`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md): enforce event handler naming conventions in JSX
- [`react/jsx-key`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md): validate JSX has `key` prop when in array or iterator; set to warn only
- [`react/jsx-pascal-case`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md): enforce PascalCase for user-defined JSX components
- [`react/no-multi-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md): prevent multiple component definitions per file, apart from stateless functional components
- [`react/no-render-return-value`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md): prevent usage of the return value of `ReactDOM.render()`
- [`react/no-string-refs`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md): prevent using string references in `ref` attribute.
- [`react/prefer-es6-class`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md): enforce ES5 or ES6 class for React Components
- [`react/prefer-stateless-function`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md): enforce stateless React Components to be written as a pure function
- [`react/require-render-return`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md): prevent missing `return` in `render()`
- [`react/wrap-multilines`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md): prevent missing parentheses around multiline JSX


---

#### style-guide: for consistency, readability and more brevity

```yaml
---
  extends: esnext/style-guide
```

includes rules from [eslint-config-esnext](https://github.com/kunalgolani/eslint-config/tree/master/esnext#style-guide-for-consistency-readability-and-more-brevity)

```yaml
  rules:
```

selected [from here](https://github.com/yannickcr/eslint-plugin-react#list-of-supported-rules), configured to:

- [`jsx-quotes`](http://eslint.org/docs/rules/jsx-quotes): enforce the consistent use of double quotes in JSX attributes
- [`react/jsx-closing-bracket-location`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md): enforce JSX closing brackets to be `line-aligned`
- [`react/jsx-curly-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md): enforce spaces inside of curly braces in JSX attributes
- [`react/jsx-equals-spacing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md): disallow spaces around the equal sign in JSX attributes
- [`react/jsx-first-prop-new-line`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md): enforce first property to be placed on a new line when the properties are spread over multiple lines
- [`react/jsx-indent`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md): enforce tabs for indentation
- [`react/jsx-indent-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md): enforce tabs for indenting props
- [`react/jsx-max-props-per-line`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md): limit to a maximum of 2 props on a single line in JSX
- [`react/jsx-sort-props`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md): enforce alphabetical sorting of props, with shorthand props first and callbacks last
- [`react/jsx-space-before-closing`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md): require spacing before closing bracket in JSX
- [`react/self-closing-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md): prevent extra closing tags for components without children
- [`react/sort-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md): enforce component methods to be in lifecycle order
- [`react/sort-prop-types`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md): enforce `propTypes` declarations to be alphabetically sorted, object first and