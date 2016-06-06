/**
 * # Test Node
 */

import { find } from 'spiff';
import { normalizeGlobs } from '../util';
import { exclusionGlobs } from '../../config/whim';

export default async function node(options) {
	const inclusionGlobs = [
		'test{s,}{/**/*,}.js',
		'!**/fixture{s,}/**',
		'!**/helper{s,}/**',
	];

	const globs = normalizeGlobs(options._, inclusionGlobs, exclusionGlobs);

	return find(globs)
		.map(file => require(file.path));
}
