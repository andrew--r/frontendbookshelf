import curry from './curry';

/**
 * Checks if two values are strictly equal
 *
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 */
export function strictEquals(a, b) {
	return a === b;
}

export default curry(strictEquals);
