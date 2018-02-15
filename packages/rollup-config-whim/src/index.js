import camelCase from 'lodash.camelcase';
import isomorphic from 'rollup-preset-isomorphic';
import istanbul from 'rollup-plugin-istanbul';
import readPkgUp from 'read-pkg-up';

export function onwarn(warning) {
	if (warning.code !== 'CIRCULAR_DEPENDENCY') {
		console.error(`(!) ${warning.message}`);
	}
}

export function configureTest(pkg) {
	const nyc = pkg.nyc || {};
	const include = nyc.include || ['**'];
	const exclude = nyc.exclude || [
		'coverage/**',
		'test/**',
		'test{,-*}.js',
		'**/*.test.js',
		'**/__tests__/**',
		'**/node_modules/**',
	];

	return {
		input: 'test/index.js',
		output: {
			format: 'iife',
			name: camelCase(pkg.name),
			globals: Object.keys(pkg.dependencies).reduce(
				(a, b) => Object.assign(a, { [b]: camelCase(b) }),
				{}
			),
		},
		plugins: [
			...isomorphic(),
			istanbul({
				include,
				exclude,
			}),
		],
		onwarn,
	};
}

export function configureWeb() {
	const { pkg } = readPkgUp.sync();

	if (process.env.NODE_ENV === 'test') {
		return configureTest(pkg);
	}

	return {
		input: 'src/client/js/index.js',
		output: {
			format: 'iife',
			name: camelCase(pkg.name),
			globals: Object.keys(pkg.dependencies).reduce(
				(a, b) => Object.assign(a, { [b]: camelCase(b) }),
				{}
			),
		},
		plugins: isomorphic({
			multiEntry: false,
		}),
		onwarn,
	};
}

export function configureModule() {
	const { pkg } = readPkgUp.sync();

	if (process.env.NODE_ENV === 'test') {
		return configureTest(pkg);
	}

	return {
		external: Object.keys(pkg.dependencies),
		input: 'src/index.js',
		output: [
			{
				format: 'cjs',
				file: pkg.main,
				sourcemap: true,
			},
			{
				format: 'es',
				file: pkg.module,
				sourcemap: true,
			},
		],
		plugins: isomorphic({
			multiEntry: false,
		}),
		onwarn,
	};
}
