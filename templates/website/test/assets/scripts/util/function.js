import test from 'ava';
import { debounce } from '../../../../src/assets/scripts/util/function';

test('debounce', async assert => {
	assert.is(typeof debounce, 'function');
});
