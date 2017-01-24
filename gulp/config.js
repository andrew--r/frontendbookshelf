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
	postcssEasyImport: {
		base: {
			glob: true,
		},
	},
	webpackStream: {
		base: {
			entry: './source/scripts/index.js',
			output: {
				filename: 'bundle.js',
			},
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
	browserSync: {
		base: {
			port: process.env.PORT || 3000,
			server: './build',
			open: 'local',
		},
	}
};

export const PATHS = {
	source: {
		templates: {
			blocks: './source/blocks',
			layouts: './source/layouts',
			pages: './source/pages',
		},
		scripts: './source/scripts',
		styles: {
			common: './source/styles',
			blocks: './source/blocks',
		},
		images: './source/images',
		data: './source/data',
	},
	build: {
		templates: './build',
		scripts: './build',
		styles: './build',
		images: './build/images',
	},
};
