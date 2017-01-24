import gutil from 'gulp-util';
import path from 'path';

const cssRulesOrder = require(path.resolve(process.cwd(), './css-rules-order'));

export const PATHS = {
	source: {
		base: './source',
		templates: {
			blocks: './source/blocks',
			layouts: './source/layouts',
			pages: './source/pages',
		},
		scripts: './source/scripts',
		styles: {
			all: './source/{styles,blocks}',
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
	postcssSorting: {
		base: {
			'rule-nested-empty-line-before': [true, { except: ['first-nested'] }],
			'at-rule-nested-empty-line-before': [true, { except: ['first-nested'] }],
			'declaration-empty-line-before': false,
			'properties-order': cssRulesOrder,
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
