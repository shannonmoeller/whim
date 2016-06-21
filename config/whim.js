'use strict';

var pkg = require('../package.json');

module.exports = {
	pkg,

	exclusionGlobs: [
		'!**/*.min.{css,js}',
		'!**/bower_components/**',
		'!**/jspm_packages/**',
		'!**/node_modules/**',
	],
};
