import $$ from './$$';

module.exports = function () {
	$$('a').on('mouseover', () => {
		const href = this.attributes.href.value;

		if (href !== '' && href !== '#') {
			$$(`a[href="${href}"]`).forEach((l) => {
				l.classList.add('hover');
			});
		}
	});

	$$('a').on('mouseout', () => {
		$$('a').forEach((l) => {
			l.classList.remove('hover');
		});
	});
};
