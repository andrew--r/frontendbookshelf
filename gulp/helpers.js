import path from 'path';

/**
 * Converts relative (to project root) path to absolute path
 * @param {String} relativePath
 * @return {String} absolute path
 */
export function relativePathToAbsolute(relativePath) {
	return path.resolve(process.cwd(), relativePath);
}
