module.exports = {
	env: {
		browser: true,
		jquery: true,
		node: true,
		es6: true, // Webpack
		commonjs: true // Webpack
	},
	globals: {
		window: true,
		ui: true,
		jk: true
	},
	rules: {
		// Possible Errors
		"no-compare-neg-zero": 2,
		"no-cond-assign": 2,
		"no-console": [1, { allow: ["warn", "error"] }],
		"no-constant-condition": 2,
		"no-debugger": 2,
		"no-dupe-args": 2,
		"no-dupe-keys": 2,
		"no-duplicate-case": 2,
		"no-empty": 2,
		"no-ex-assign": 2,
		"no-extra-boolean-cast": 2,
		"no-extra-semi": 2,
		"no-func-assign": 2,
		"no-inner-declarations": 2,
		"no-irregular-whitespace": 2,
		"no-obj-calls": 2,
		"no-regex-spaces": 1,
		"no-sparse-arrays": 1,
		"no-unexpected-multiline": 2,
		"no-unreachable": 2,
		"no-unsafe-finally": 2,
		"use-isnan": 2,
		"valid-typeof": 2,
		// Best Practices
		curly: 1,
		"default-case": 1,
		// eqeqeq: 1,
		"no-caller": 2,
		"no-empty-function": 1,
		"no-empty-pattern": 2,
		"no-eval": 1,
		"no-extend-native": 2,
		"no-extra-bind": 1,
		"no-fallthrough": 2,
		"no-global-assign": 2,
		"no-implicit-globals": 1,
		"no-implied-eval": 2,
		"no-iterator": 2,
		"no-lone-blocks": 2,
		"no-loop-func": 2,
		"no-multi-str": 2,
		"no-new": 2,
		"no-new-func": 2,
		"no-new-wrappers": 2,
		"no-octal": 2,
		"no-octal-escape": 2,
		"no-redeclare": 2,
		"no-script-url": 2,
		"no-self-assign": 2,
		"no-self-compare": 2,
		"no-sequences": 2,
		"no-throw-literal": 1,
		"no-unmodified-loop-condition": 1,
		"no-unused-labels": 2,
		"no-with": 2,
		// radix: 1,
		// Strict Mode - none
		// Variables
		"no-delete-var": 2,
		"no-undef": 2,
		"no-undef-init": 1,
		"no-unused-vars": 1,
		// Node.js and CommonJS - none
		// Stylistic Issues
		"comma-dangle": 2,
		"no-nested-ternary": 1,
		semi: 2
	}
};
