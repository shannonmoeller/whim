import test from 'blue-tape';
import {foo} from '../src/index';

test('should be bar', async assert => {
	assert.is(foo, 'bar');
});
