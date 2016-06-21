import test from 'whim/src/test';
import {
	htmlEscape,
	html
} from '../../../../src/assets/scripts/util/template';

test('htmlEscape', async assert => {
	assert.is(typeof htmlEscape, 'function');
});

test('html', async assert => {
	assert.is(typeof html, 'function');
});
