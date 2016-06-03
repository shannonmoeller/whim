function when(answers) {
	return answers.type === 'website';
}

export const websiteQuestions = [
	{
		type: 'input',
		name: 'domain',
		message: 'domain',
		default: 'example.com',
		when
	},
	{
		type: 'confirm',
		name: 'ssl',
		message: 'ssl',
		default: true,
		when
	}
];

export async function initWebsite(answers) {
	return answers;
}
