import path from 'path';
import gutil from 'gulp-util';
import PATHS from './paths';
import stylelintConfig from '../stylelint.config';

const PLUGINS_OPTIONS = {
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
			'properties-order': stylelintConfig.rules['declaration-block-properties-order'],
		},
	},
	webpackStream: {
		base: {
			entry: path.resolve(process.cwd(), `${PATHS.source.scripts}/index.js`),
			output: {
				filename: 'bundle.js',
			},
			resolve: {
				extensions: ['', '.js'],
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
	},
};

/**
 * Returns plugin options based on current NODE_ENV
 *
 * @param  {String} pluginName
 * @return {Object} plugin options based on NODE_ENV
 */
export default function getPluginOptions(pluginName) {
	const pluginOptions = PLUGINS_OPTIONS[pluginName] || {};

	return { ...(pluginOptions.base || {}), ...(pluginOptions[process.env.NODE_ENV] || {}) };
}
