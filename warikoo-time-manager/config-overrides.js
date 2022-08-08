/* config-overrides.js */

// ### IMPORTANT ##: PLEASE INSTALL POLYFILLS BY-
// npm i -D process path-browserify

module.exports = function override(config, env) {
	//do stuff with the webpack config...

	config.resolve.fallback = {
		// Starting from webpack ver5, webpack doesn't ship polyfills for node builtin modules in browser environment by deafult: (migration guide: https://webpack.js.org/migrate/5/#clean-up-configuration)
		path: require.resolve('path-browserify'), // https://stackoverflow.com/a/65542520/10012446
		fs: false, // https://stackoverflow.com/a/71192918/10012446
	}
	return config
}
