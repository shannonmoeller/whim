'use strict';

var path = require('path'),
	assert = require('yeoman-generator').assert,
	helpers = require('yeoman-generator').test;

describe('whim:app', function () {
	before(function (done) {
		helpers
			.run(path.join(__dirname, '../generators/app'))
			.withOptions({ skipInstall: true })
			.on('end', done);
	});

	it('creates files', function () {
		assert.file([
			'bower.json',
			'package.json',
			'.editorconfig',
			'.jshintrc'
		]);
	});
});
