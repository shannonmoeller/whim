'use strict';

var tape = require('blue-tape');

exports.hook = function () {
	require('esprev/register');
};

exports.test = tape;
