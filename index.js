#!/usr/bin/env node
'use strict';

var inquirer = require('inquirer');
var path = require('path');
var template = require('gulp-template');
var vinylFs = require('vinyl-fs');
var ygor = require('ygor');

function generate(base, src, dest, answers) {
	vinylFs
		.src(src, {base: base})
		.pipe(template(answers))
		.pipe(vinylFs.dest(dest));
}

function module() {
	var base = path.join(__dirname, 'templates/module');
	var src = path.join(base, '/**/{*,.*}');
	var dest = process.cwd();
	var prompts = [
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
	];

	inquirer.prompt(prompts, generate.bind(null, base, src, dest));
}

function website() {
	var base = path.join(__dirname, 'templates/website');
	var src = path.join(base, '/**/{*,.*}');
	var dest = process.cwd();
	var prompts = [
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
	];

	inquirer.prompt(prompts, generate.bind(null, base, src, dest));
}

ygor
	.task('module', module)
	.task('website', website);
