import presetEnv from 'babel-preset-env';
import pluginIstanbul from 'babel-plugin-istanbul';
import pluginObjectRestSpread from 'babel-plugin-transform-object-rest-spread';

export default function babelPresetWhim(context, opts = {}) {
	const browsers = opts.browsers || 'last 2 versions';
	const esmodules = opts.esmodules || false;
	const node = opts.node || 6;

	return {
		presets: [
			[
				presetEnv,
				{
					targets: {
						browsers,
						esmodules,
						node,
					},
				},
			],
		],
		plugins: [pluginObjectRestSpread],
		env: {
			test: {
				plugins: [pluginIstanbul],
			},
		},
	};
}
