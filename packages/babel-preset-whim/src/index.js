import presetEnv from 'babel-preset-env';
import pluginIstanbul from 'babel-plugin-istanbul';
import pluginTransformObjectRestSpread from 'babel-plugin-transform-object-rest-spread';

export default function babelPresetWhim(context, opts = {}) {
	const targets = {
		browsers: 'last 2 versions',
		node: 6,
	};

	if (opts.browsers !== undefined) {
		targets.browsers = opts.browsers;
	}

	if (opts.esmodules !== undefined) {
		targets.esmodules = opts.esmodules;
	}

	if (opts.node !== undefined) {
		targets.node = opts.node;
	}

	return {
		presets: [[presetEnv, { targets }]],
		plugins: [pluginTransformObjectRestSpread],
		env: {
			test: {
				plugins: [pluginIstanbul],
			},
		},
	};
}
