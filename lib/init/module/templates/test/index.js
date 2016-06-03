import { foo } from '../src/index';
import test from 'ava';

test('should be bar', async assert => {
	assert.is(foo, 'bar');
});
