import inquirer from 'inquirer';

import { commonQuestions, initCommon } from './common';
import { moduleQuestions, initModule } from './module';
import { websiteQuestions, initWebsite } from './website';

const prompts = [
	{
		type: 'list',
		name: 'type',
		message: 'type',
		choices: [
			{ value: 'module' },
			{ value: 'website' }
		]
	},

	...commonQuestions,
	...moduleQuestions,
	...websiteQuestions
];

const generators = {
	module: initModule,
	website: initWebsite
};

export default function init() {
	return inquirer
		.prompt(prompts)
		.then(answers => initCommon(answers))
		.then(answers => generators[answers.type](answers));
}
