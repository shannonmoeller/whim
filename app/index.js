'use strict';

var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
	prompting: function () {
		var done = this.async(),
			prompts = [
				{
					name: 'ssl',
					type: 'confirm',
					message: 'Will you be using SSL?',
					default: true
				},
				{
					name: 'domain',
					message: 'What is the site\'s domain?',
					default: 'example.com'
				},
				{
					name: 'slug',
					message: 'What should I name the package?',
					default: function (answers) {
						return answers.domain
							.split('.')
							.reverse()
							.join('-');
					}
				}
			];

		function save(answers) {
			this.answers = answers;
			done();
		}

		this.prompt(prompts, save.bind(this));
	},

	writing: function () {
		this.fs.copyTpl(
			this.templatePath('{.*,*.*}'),
			this.destinationRoot(),
			this.answers
		);

		this.fs.copyTpl(
			this.templatePath('src'),
			this.destinationPath('src'),
			this.answers
		);

		this.fs.copyTpl(
			this.templatePath('tasks'),
			this.destinationPath('tasks'),
			this.answers
		);
	},

	install: function () {
		this.npmInstall();
	}
});
