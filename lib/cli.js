#!/usr/bin/env node

var hook = require('hook');
var ygor = require('ygor');

function lazy(mod, method) {
	var localMethod = method || 'default';

	return function (cli) {
		return require(mod)[localMethod](cli);
	};
}

hook();

ygor
	.task('init', lazy('./init'))
	.task('lint', lazy('./lint'))
	.task('lint-css', lazy('./lint', 'css'))
	.task('lint-js', lazy('./lint', 'js'))
	.task('test', lazy('./test'))
	.task('test-node', lazy('./test', 'node'))
	.task('test-browser', lazy('./test', 'browser'))
	.task('test-report', lazy('./test', 'report'));
