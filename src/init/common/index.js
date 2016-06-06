/**
 * # Init Common
 */

import fs from 'fs';
import path from 'path';
import inquirer from 'inquirer';
import { read, write } from 'spiff';
import { render } from '../../util';

const safetyQuestions = [
	{
		type: 'confirm',
		name: 'nonEmptyOkay',
		message: 'Running in a non-empty directory. Continue?',
		default: false,
		when() {
			return fs
				.readdirSync(process.cwd())
				.length > 0;
		},
	},
];

const questions = [
	{
		type: 'input',
		name: 'slug',
		message: 'package name',
		default() {
			return path
				.basename(process.cwd())
				.toLowerCase()
				.replace(/[^\w-]+/g, '-');
		},
	},
	{
		type: 'input',
		name: 'version',
		message: 'package version',
		default: '1.0.0',
	},
	{
		type: 'input',
		name: 'description',
		message: 'package description',
		default: '',
	},
	{
		type: 'list',
		name: 'repoHost',
		message: 'repo host',
		choices: [
			{ value: 'github' },
			{ value: 'gitlab' },
			{ value: 'bitbucket' },
		],
	},
	{
		type: 'input',
		name: 'repoUser',
		message: 'repo user',
		default: 'shannonmoeller',
	},
	{
		type: 'input',
		name: 'authorName',
		message: 'author name',
		default: 'Shannon Moeller',
	},
	{
		type: 'input',
		name: 'authorEmail',
		message: 'author email',
		default: 'me@shannonmoeller.com',
	},
	{
		type: 'input',
		name: 'authorUrl',
		message: 'author url',
		default: 'shannonmoeller.com',
	},
];

async function generate(answers) {
	const cwd = __dirname;
	const dest = process.cwd();

	await read('./templates/**/{,*}.*', { cwd })
		.mapProp('contents', x => render(x, answers))
		.map(write(dest));

	return answers;
}

export default async function initCommon() {
	const safetyAnswers = await inquirer
		.prompt(safetyQuestions);

	if (safetyAnswers.nonEmptyOkay === false) {
		process.exit();
	}

	const answers = await inquirer
		.prompt(questions);

	return generate(answers);
}
