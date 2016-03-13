import {debounce} from '../../../../src/assets/scripts/util/function';
import test from 'ava';

test('debounce', async assert => {
	assert.is(typeof debounce, 'function');
});
