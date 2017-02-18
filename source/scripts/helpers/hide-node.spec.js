/* global describe, test, expect */

import hideNode from './hide-node';

describe('hideNode()', () => {
	test('should set node style\'s display property to empty string', () => {
		const hiddenNode = {
			style: { display: '' },
		};

		hideNode(hiddenNode);
		expect(hiddenNode.style.display).toBe('none');
	});
});
