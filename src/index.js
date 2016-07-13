import { dirname } from 'path';
import { spawn } from 'child-process-promise';
import minimist from 'minimist';

export function argv(options = {}) {
	return minimist(process.argv.slice(2), options);
}

export function error(err) {
	if (!err) {
		process.exit(1);
	}

	const code = err.code || 1;
	const message = err.stack
		|| err.stderr
		|| err.message
		|| err;

	console.error(message);
	process.exit(code);
}

export function install(mod) {
	if (!mod || typeof mod !== 'string') {
		throw new Error('Expected a module name.');
	}

	return spawn('npm', ['install', '--save-dev', mod], {
		cwd: dirname(__dirname),
		capture: ['stderr'],
	});
}

export async function req(mod) {
	if (!mod || typeof mod !== 'string') {
		throw new Error('Expected a module name.');
	}

	try {
		return require(mod);
	}
	catch (e) {
		// well that didn't work
	}

	console.log(`Could not find ${mod}. Attempting to install.`);

	await install(mod);

	return require(mod);
}

export async function run(command, options = {}) {
	if (!command || typeof command !== 'string') {
		throw new Error('Expected a command name.');
	}

	const mod = await req(`whim-${command}`);

	return mod.run(options);
}
