import test from 'ava';
import {find} from '../../../../src/assets/scripts/util/fs';

test('find', async assert => {
	assert.is(typeof find, 'function');
});
