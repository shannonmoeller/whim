/**
 * # Make Clean
 *
 *     dist/ ━┓
 *            ┗━ ━┓
 *                ┗━ trash
 */

import { remove } from 'spiff';

export default async function clean() {
	return remove('dist');
}
