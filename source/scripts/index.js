import Filters from './filters';

function onDOMContentLoaded() {
	const filters = new Filters({
		bookSelector: '.book',
		tagCheckboxSelector: '.tag input[type="checkbox"]',
	});

	filters.init();
}

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
