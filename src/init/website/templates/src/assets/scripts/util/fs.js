/**
 * # File System Utilities
 */

import globby from 'globby';

/**
 * @method find
 * @param {String|Array<String>} glob
 * @return {Promise<Object<String,Array<String>>>}
 */
export async function find(glob) {
	const srcFiles = await globby(glob);
	const destFiles = srcFiles.map(file => file.replace('src/', 'dist/'));

	return { srcFiles, destFiles };
}
