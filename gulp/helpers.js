import path from 'path';
import * as Config from './config';

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
