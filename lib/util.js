export function normalizeGlobs(globs, inclusionGlobs, exclusionGlobs) {
	const localGlobs = [].concat(globs || []);

	if (!localGlobs.length) {
		localGlobs.push(...inclusionGlobs);
	}

	localGlobs.push(...exclusionGlobs);

	return localGlobs;
}
