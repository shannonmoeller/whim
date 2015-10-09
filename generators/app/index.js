'use strict';

var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
	writing: function () {
		this.fs.copy(
			this.templatePath('{.*,*.*}'),
			this.destinationRoot()
		);

		this.fs.copy(
			this.templatePath('src'),
			this.destinationPath('src')
		);

		this.fs.copy(
			this.templatePath('tasks'),
			this.destinationPath('tasks')
		);
	},

	install: function () {
		this.npmInstall();
	}
});
