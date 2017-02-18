import curry from './curry';

/**
 * Checks if two values are not strictly equal
 *
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 */
export function notStrictEquals(a, b) {
	return a !== b;
}

export default curry(notStrictEquals);
