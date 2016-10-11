'use strict';

var assign = require('object-assign');
var debug = require('debug')('whim');
var npmPath = require('npm-path');
var cp = require('child_process');
var which = require('which');

var pkg = require('./package.json');
var env = assign({}, process.env, {
	[npmPath.PATH]: npmPath.get(),
});

function validate(command) {
	debug(`Validating ${command}.`);

	if (!(/^[a-z\-]*$/).test(command)) {
		console.error(`Invalid command name: ${command}`);
		process.exit(127);
	}
}

function find(command) {
	debug(`Finding ${command}.`);

	return which.sync(command, env);
}

function install(command) {
	debug(`Installing ${command}.`);

	var res = cp.spawnSync('npm', ['i', '-D', command], {
		stdio: [null, process.stdout, process.stderr],
		env: env,
	});

	if (res.error || res.status !== 0) {
		debug(`Install of ${command} failed.`);

		throw res || new Error();
	}

	return res.stdout;
}

function run(command, args) {
	debug(`Running ${command}.`);

	var res = cp.spawnSync(command, args, {
		stdio: [process.stdin, process.stdout, process.stderr],
		env: env,
	});

	if (res.error || res.status !== 0) {
		debug(`Command ${command} failed.`);

		throw res || new Error();
	}

	return res.stdout;
}

function whim(subcommand, args) {
	var command = `${pkg.name}-${subcommand}`;

	validate(command);

	try {
		find(command);
	}
	catch (e) {
		install(command);
	}

	try {
		run(command, args);
	}
	catch (e) {
		process.exit(e.status || 1);
	}
}

module.exports = assign(whim, {
	env: env,
	find: find,
	install: install,
	run: run,
	validate: validate,
	whim: whim,
});
