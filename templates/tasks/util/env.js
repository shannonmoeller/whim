import cli from './cli';
import { join } from 'path';

var env;

try {
	env = require('../../env-' + cli.env);
}
catch (e) {
	env = require('../../env-dist');
}

export default {
	...env,

	// Convenience path accessors to help keep tasks dry
	getDestPath: (path = '') => join(env.DIR_DEST, path),
	getJspmPath: (path = '') => join(env.DIR_JSPM, path),
	getNpmPath: (path = '') => join(env.DIR_NPM, path),
	getSrcPath: (path = '') => join(env.DIR_SRC, path)
};
