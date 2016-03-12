#!/usr/bin/env node
'use strict';

var inquirer = require('inquirer');
var path = require('path');
var template = require('gulp-template');
var vinylFs = require('vinyl-fs');
var ygor = require('ygor');

function generate(name, prompts) {
	var base = path.join(__dirname, 'templates', name);
	var src = path.join(base, '**/{*,.*}');
	var dest = process.cwd();

	inquirer.prompt(prompts, function (answers) {
		vinylFs
			.src(src, {base: base})
			.pipe(template(answers))
			.pipe(vinylFs.dest(dest));
	});
}

function module() {
	generate('module', [
		{
			name: 'slug',
			message: 'slug',
			default: function (answers) {
				return process
					.cwd()
					.toLowerCase()
					.replace(/[^\w-]*/g, '-');
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
		}
	]);
}

ygor
	.task('module', module)
	.task('website', website);
