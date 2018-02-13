import camelCase from 'lodash.camelcase';
import isomorphic from 'rollup-preset-isomorphic';
import istanbul from 'rollup-plugin-istanbul';
import readPkgUp from 'read-pkg-up';

const { pkg } = readPkgUp.sync();
let config = {};

if (process.env.NODE_ENV === 'test') {
	// Bundle for tests
	config = {
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
				exclude: pkg.nyc.ignore,
			}),
		],
	};
} else {
	// Bundle for web
	config = {
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
		plugins: isomorphic(),
	};
}

export default config;
