'use strict';

var presets = [
    require.resolve('babel-preset-es2015'),
    require.resolve('babel-preset-stage-2'),
];

var plugins = [
    require.resolve('babel-plugin-add-module-exports'),
];

require('babel-polyfill');
require('babel-register')({
    presets: presets,
    plugins: plugins,
});
