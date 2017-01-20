import gutil from 'gulp-util';

export const PLUGINS_OPTIONS = {
	plumber: {
		base: {
			errorHandler: gutil.log,
		},
	},
	pug: {
		development: {
			pretty: '\t',
		},
	},
	webpackStream: {
		base: {
			entry: './source/scripts/index.js',
			module: {
				loaders: [
					{
						test: /\.jsx?$/,
						exclude: /(node_modules)/,
						loader: 'babel',
					},
				],
			},
		},
		development: {
			devtool: 'source-map',
		},
	},
	uglify: {
		base: {
			compress: {
				warnings: false,
				screw_ie8: true,
			},
		},
	},
};
