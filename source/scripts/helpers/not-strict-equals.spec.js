/* global describe, test, expect */

import { notStrictEquals } from './not-strict-equals';

describe('notStrictEquals()', () => {
	test('should check strict unequality', () => {
		expect(notStrictEquals(1, 1)).toBe(false);
		expect(notStrictEquals('1', '1')).toBe(false);
		expect(notStrictEquals(1, '1')).toBe(true);
		expect(notStrictEquals([], [])).toBe(true);
		expect(notStrictEquals({}, {})).toBe(true);
	});
});
