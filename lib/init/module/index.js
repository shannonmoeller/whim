function when(answers) {
	return answers.type === 'module';
}

export const moduleQuestions = [
	{
		type: 'confirm',
		name: 'futureful',
		message: 'futureful',
		default: true,
		when
	},
	{
		type: 'confirm',
		name: 'umd',
		message: 'umd',
		default: true,
		when
	}
];

export async function initModule(answers) {
	return answers;
}
