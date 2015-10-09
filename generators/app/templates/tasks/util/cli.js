import yargs from 'yargs';

var cli = yargs
	.usage('Usage: gulp <task> [options]')
	.alias('h', 'help')

	.option('d', {
		alias: 'debug',
		default: false,
		describe: 'Show debug information.'
	})
	.option('e', {
		alias: 'env',
		default: 'dev',
		describe: 'Specify build environment (dev|stage|prod).'
	})
	.option('m', {
		alias: 'maps',
		default: false,
		describe: 'Generate sourcemaps.'
	})
	.option('p', {
		alias: 'port',
		default: 3000,
		describe: 'Port from which to serve files.'
	})
	.option('w', {
		alias: 'watch',
		default: false,
		describe: 'Watch files for changes.'
	})

	.describe('h', 'Display this help message.')
	.describe('tasks', 'List available tasks.')
	.describe('version', 'Show version information');

if (cli.argv.help) {
	console.log(cli.help());
	process.exit();
}

export default cli.argv;
