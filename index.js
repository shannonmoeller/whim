#!/usr/bin/env node
'use strict';

var inquirer = require('inquirer'),
	path = require('path'),
	template = require('gulp-template'),
	vinylFs = require('vinyl-fs'),

	base = path.join(__dirname, 'templates'),
	src = path.join(base, '/**/{*,.*}'),
	dest = process.cwd(),

	prompts = [
		{
			name: 'ssl',
			type: 'confirm',
			message: 'Will you be using SSL?',
			default: true
		},
		{
			name: 'domain',
			message: 'What is the site\'s domain?',
			default: 'example.com'
		},
		{
			name: 'slug',
			message: 'What should I name the package?',
			default: function (answers) {
				return answers.domain
					.split('.')
					.reverse()
					.join('-');
			}
		}
	];

function generate(answers) {
	vinylFs
		.src(src, { base: base })
		.pipe(template(answers))
		.pipe(vinylFs.dest(dest));
}

inquirer.prompt(prompts, generate);
