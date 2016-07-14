module.exports = {
	extends: [
		'esnext',
		'plugin:react/recommended'
	],

	plugins: [
		'react',
		'react-native'
	],

	rules: {
		'react-native/no-color-literals': 2,
		'react-native/no-inline-styles': 2,
		'react-native/no-unused-styles': 2,
		'react-native/split-platform-components': 2,
		'react/display-name': 0,
		'react/jsx-boolean-value': 2,
		'react/jsx-handler-names': 2,
		'react/jsx-key': 1,
		'react/jsx-pascal-case': 2,
		'react/no-multi-comp': [ 2, {
			ignoreStateless: true
		} ],
		'react/no-render-return-value': 2,
		'react/no-string-refs': 2,
		'react/prefer-es6-class': 2,
		'react/prefer-stateless-function': 2,
		'react/require-render-return': 2,
		'react/wrap-multilines': 2
	}
}