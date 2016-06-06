/**
 * # Init Website
 */

import inquirer from 'inquirer';
import initCommon from '../common';
import { read, write } from 'spiff';
import { render } from '../../util';

const questions = [
	{
		type: 'input',
		name: 'domain',
		message: 'domain',
		default: 'example.com',
	},
	{
		type: 'confirm',
		name: 'ssl',
		message: 'ssl',
		default: true,
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

export default async function initWebsite() {
	const commonAnswers = await initCommon();
	const answers = await inquirer
		.prompt(questions);

	return generate({
		...commonAnswers,
		...answers,
	});
}
