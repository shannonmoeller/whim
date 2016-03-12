import globby from 'globby';

export async function find(glob) {
	const srcFiles = await globby(glob);
	const destFiles = srcFiles.map(file => file.replace('src/', 'dist/'));

	return {srcFiles, destFiles};
}
