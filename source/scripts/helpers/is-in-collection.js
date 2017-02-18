import curry from './curry';
import strictEquals from './strict-equals';

/**
 * Checks if given item is presented in given collection
 *
 * @param {Array} collection
 * @param {*} item
 * @return {Boolean}
 */
export function isInCollection(collection, item) {
	return collection.some(strictEquals(item));
}

export default curry(isInCollection);
