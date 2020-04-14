// next.config.js
const withStylus = require('@zeit/next-stylus');

module.exports = withStylus({
	cssModules: true,
	webpack: (config, { dev }) => {
		if (dev) {
			config.module.rules.push({
				test: /\.js$/,
				loader: 'eslint-loader',
				exclude: ['/node_modules/', '/.next/', '/out/'],
				enforce: 'pre',
				options: {
					emitWarning: true,
					fix: true,
				},
			});
		}

		return config;
	}
});