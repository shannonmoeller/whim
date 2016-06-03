import test from 'ava';
import { getTarget, innerHTML, register } from '../../../../src/assets/scripts/util/dom';

test('getTarget', async assert => {
	assert.is(typeof getTarget, 'function');
});

test('innerHTML', async assert => {
	assert.is(typeof innerHTML, 'function');
});

test('register', async assert => {
	assert.is(typeof register, 'function');
});
