import camelCase from 'lodash.camelcase';
import isomorphic from 'rollup-preset-isomorphic';
import istanbul from 'rollup-plugin-istanbul';
import readPkgUp from 'read-pkg-up';

function onwarn(warning) {
	if (warning.code !== 'CIRCULAR_DEPENDENCY') {
		console.error(`(!) ${warning.message}`);
	}
}

function configureTest() {
	const { pkg } = readPkgUp.sync();
	const nyc = (pkg && pkg.nyc) || {};

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

function configureBuild() {
	const { pkg } = readPkgUp.sync();

	return {
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
		external: Object.keys(pkg.dependencies),
		plugins: [
			...isomorphic({
				multiEntry: false,
			}),
		],
		onwarn,
	};
}

export default function rollupConfigWhim() {
	return process.env.NODE_ENV === 'test' ? configureTest() : configureBuild();
}
