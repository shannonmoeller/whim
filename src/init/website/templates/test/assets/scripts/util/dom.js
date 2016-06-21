import test from 'whim/src/test';
import {
	getTarget,
	getValues,
	setInnerHTML
} from '../../../../src/assets/scripts/util/dom';

test('getTarget', async assert => {
	assert.equal(typeof getTarget, 'function');
});

test('getValues', async assert => {
	assert.equal(typeof getValues, 'function');
});

test('setInnerHTML', async assert => {
	assert.equal(typeof setInnerHTML, 'function');
});
