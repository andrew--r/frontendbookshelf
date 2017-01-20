import path from 'path';
import * as Config from './config';

/**
 * Converts relative (to project root) path to absolute path
 * @param {String} relativePath
 * @return {String} absolute path
 */
export function relativePathToAbsolute(relativePath) {
	return path.resolve(process.cwd(), relativePath);
}

/**
 * Returns corresponding plugin options based on current NODE_ENV
 *
 * @param  {String} pluginName
 * @return {Object} plugin options based on NODE_ENV
 */
export function getPluginOptions(pluginName) {
	const pluginOptions = Config.PLUGINS_OPTIONS[pluginName] || {};

	return { ...(pluginOptions.base || {}), ...(pluginOptions[process.env.NODE_ENV] || {}) };
}
