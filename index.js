#!/usr/bin/env node
'use strict';

var inquirer = require('inquirer');
var path = require('path');
var template = require('gulp-template');
var vinylFs = require('vinyl-fs');
var ygor = require('ygor');

var templateOptions = {
	interpolate: /<%=([\s\S]+?)%>/g
};

function copyDir(dir, answers) {
	var base = path.join(__dirname, 'templates', dir);
	var src = path.join(base, '**/{*,.*}');
	var dest = process.cwd();

	vinylFs
		.src(src, { base: base })
		.pipe(template(answers, templateOptions))
		.pipe(vinylFs.dest(dest));
}

function generate(dir, questions) {
	inquirer.prompt(questions, function (answers) {
		copyDir('common', answers);
		copyDir(dir, answers);
	});
}

function module() {
	generate('module', [
		{
			name: 'slug',
			message: 'slug',
			default: function () {
				return path
					.basename(process.cwd())
					.toLowerCase()
					.replace(/[^\w-]+/g, '-');
			}
		},
		{
			name: 'description',
			message: 'description'
		}
	]);
}

function website() {
	generate('website', [
		{
			name: 'ssl',
			message: 'ssl',
			type: 'confirm',
			default: true
		},
		{
			name: 'domain',
			message: 'domain',
			default: 'example.com'
		},
		{
			name: 'slug',
			message: 'slug',
			default: function (answers) {
				return answers.domain
					.split('.')
					.reverse()
					.join('-');
			}
		},
		{
			name: 'description',
			message: 'description'
		},
		{
			name: 'splitBundles',
			message: 'common js bundle',
			type: 'confirm',
			default: false
		}
	]);
}

ygor
	.task('module', module)
	.task('website', website);
