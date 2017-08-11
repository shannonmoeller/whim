'use strict';

const appPath = require('app-module-path');
const npmPath = require('npm-path');
const { join } = require('path');
const { execSync, spawnSync } = require('child_process');

function setEnv(dir) {
	appPath.addPath(join(dir, 'node_modules'));
	npmPath.setSync({ cwd: dir });
}

function execCommand(command, options) {
	const execOptions = Object.assign({ stdio: 'inherit' }, options, {
		env: Object.assign({}, process.env, {
			[npmPath.PATH]: npmPath.getSync(),
		}),
	});

	return execSync(command, execOptions);
}

function spawnCommand(command, args, options) {
	const spawnOptions = Object.assign({ stdio: 'inherit' }, options, {
		env: Object.assign({}, process.env, {
			[npmPath.PATH]: npmPath.getSync(),
		}),
	});

	return spawnSync(command, args, spawnOptions);
}

module.exports = {
	setEnv,
	execCommand,
	spawnCommand,
};
