/**
 * # Init Module
 */

import inquirer from 'inquirer';
import initCommon from '../common';
import { read, write } from 'spiff';
import { render } from '../../util';

const questions = [
	{
		type: 'confirm',
		name: 'esnext',
		message: 'esnext',
		default: true,
	},
	{
		type: 'confirm',
		name: 'umd',
		message: 'umd',
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

export default async function initModule() {
	const commonAnswers = await initCommon();
	const answers = await inquirer
		.prompt(questions);

	return generate({
		...commonAnswers,
		...answers,
	});
}
