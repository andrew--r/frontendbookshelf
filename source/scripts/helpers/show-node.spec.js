/* global describe, test, expect */

import showNode from './show-node';

describe('showNode()', () => {
	test('should set node style\'s display property to empty string', () => {
		const hiddenNode = {
			style: { display: 'none' },
		};

		showNode(hiddenNode);
		expect(hiddenNode.style.display).toBe('');
	});
});
