'use strict';

module.exports = function () {
	require('babel-polyfill');
	require('babel-register')({
		presets: [
			'es2015',
			'stage-2',
		],
	});
};
