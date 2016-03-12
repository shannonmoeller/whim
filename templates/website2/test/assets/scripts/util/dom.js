import {register} from '../../../../src/assets/scripts/util/dom';
import test from 'ava';

test('register', async assert => {
	assert.is(typeof register, 'function');
});
