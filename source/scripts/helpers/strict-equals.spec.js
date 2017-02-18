/* global describe, test, expect */

import { strictEquals } from './strict-equals';

describe('strictEquals()', () => {
	test('should check strict equality', () => {
		expect(strictEquals(1, 1)).toBe(true);
		expect(strictEquals('1', '1')).toBe(true);
		expect(strictEquals(1, '1')).toBe(false);
		expect(strictEquals([], [])).toBe(false);
		expect(strictEquals({}, {})).toBe(false);
	});
});
