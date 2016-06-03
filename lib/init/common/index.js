import path from 'path';

export const commonQuestions = [
	{
		type: 'input',
		name: 'name',
		message: 'package name',
		default: () => {
			return path
				.basename(process.cwd())
				.toLowerCase()
				.replace(/[^\w-]+/g, '-');
		}
	},
	{
		type: 'input',
		name: 'version',
		message: 'package version',
		default: '1.0.0'
	},
	{
		type: 'input',
		name: 'description',
		message: 'package description',
		default: ''
	},
	{
		type: 'list',
		name: 'repoHost',
		message: 'repo host',
		choices: [
			{ value: 'github' },
			{ value: 'gitlab' },
			{ value: 'bitbucket' }
		]
	},
	{
		type: 'input',
		name: 'repoUser',
		message: 'repo user',
		default: 'shannonmoeller'
	},
	{
		type: 'input',
		name: 'authorName',
		message: 'author name',
		default: 'Shannon Moeller'
	},
	{
		type: 'input',
		name: 'authorEmail',
		message: 'author email',
		default: 'me@shannonmoeller.com'
	},
	{
		type: 'input',
		name: 'authorUrl',
		message: 'author url',
		default: 'shannonmoeller.com'
	}
];

export async function initCommon(answers) {
	return answers;
}
