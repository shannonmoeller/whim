import {find} from '../../../../src/assets/scripts/util/fs';
import test from 'ava';

test('find', async assert => {
	assert.is(typeof find, 'function');
});
