#!/usr/bin/env node
'use strict';

var vinylFs = require('vinyl-fs'),
	template = require('gulp-template'),
	inquirer = require('inquirer'),

	files = './templates/**/{.*,*.*}',
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
		.src(files, { cwd: __dirname, base: __dirname })
		.pipe(template(answers))
		.pipe(vinylFs.dest(process.cwd()));
}

inquirer.prompt(prompts, generate);
