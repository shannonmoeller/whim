/**
 * # Init Module
 */

import inquirer from 'inquirer';
import initCommon from '../common';

const questions = [
	{
		type: 'confirm',
		name: 'futureful',
		message: 'futureful',
		default: true,
	},
	{
		type: 'confirm',
		name: 'umd',
		message: 'umd',
		default: true,
	},
];

function generate(answers) {
	console.log('module', answers);
	return answers;
}

export default async function initModule() {
	const commonAnswers = await initCommon();

	return inquirer
		.prompt(questions)
		.then(answers => generate({
			...commonAnswers,
			...answers,
		}));
}
