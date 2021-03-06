module.exports = {
	root: true,
	env: {
		browser: true,
	},
	extends: 'airbnb-base',
	// add your custom rules here
	'rules': {
		// don't require .vue extension when importing
		'import/extensions': ['error', 'always', {
			'js': 'never',
		}],
		// allow optionalDependencies
		'import/no-extraneous-dependencies': ['error', {
			'optionalDependencies': ['test/unit/index.js']
		}],
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		'no-tabs': 0,
		'indent': ['error', 'tab']
	}
}
