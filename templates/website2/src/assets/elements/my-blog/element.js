import {register} from '../../scripts/util/dom';

export default register('my-blog', HTMLElement, {
	createdCallback() {
		console.log('my-blog', this);
	}
});
