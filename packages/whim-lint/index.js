import ygor from 'ygor';

export async function lint() {
	await ygor.shell(`eslint **/*.{html,js}`);
	await ygor.shell(`stylelint **/*.{html,css}`);
}

ygor.task('lint', lint);
