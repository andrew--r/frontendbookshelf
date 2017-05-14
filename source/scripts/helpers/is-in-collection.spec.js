/* global describe, test, expect */

import { isInCollection } from './is-in-collection';

describe('isInCollection()', () => {
	test('should check if item is presented in collection', () => {
		const person = { name: 'Andrew' };
		const collection = [1, 'hello', person];

		expect(isInCollection(collection, 1)).toBe(true);
		expect(isInCollection(collection, 'hello')).toBe(true);
		expect(isInCollection(collection, person)).toBe(true);
		expect(isInCollection(collection, 5)).toBe(false);
		expect(isInCollection(collection, null)).toBe(false);
		expect(isInCollection(collection, undefined)).toBe(false);
	});
});
