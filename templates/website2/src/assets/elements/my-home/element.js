import {register} from '../../scripts/util/dom';

export default register('my-home', HTMLElement, {
	createdCallback() {
		console.log('my-home', this);
	}
});
