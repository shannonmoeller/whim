/**
 * # Init Website
 */

import inquirer from 'inquirer';
import initCommon from '../common';

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

function generate(answers) {
	console.log('website', answers);
	return answers;
}

export default async function initWebsite() {
	const commonAnswers = await initCommon();

	return inquirer
		.prompt(questions)
		.then(answers => generate({
			...commonAnswers,
			...answers,
		}));
}
