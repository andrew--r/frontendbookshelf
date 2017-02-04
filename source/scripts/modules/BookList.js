import $$ from './$$';

module.exports = class BookList {
	// @config — object
	// @config.baseClass — string
	// @config.defaultCategory — string
	// @config.defaultDifficulty — string
	constructor(config) {
		this.list = $$(config.baseClass);
		this.categories = [];
		this.difficulties = [];
		this.languages = [];
	}

	// helper functions for filtering
	filterCategory(name) {
		// hide elements that doesn't match with certain parameter
		$$(`.book:not([data-categories="${name}"])`).forEach((i) => {
			const index = this.list.indexOf(i);

			this.list[index].parentNode.classList.add('js-hidden');
		});

		// show elements that matches
		$$(`.book[data-categories*="${name}"]`).forEach((i) => {
			const index = this.list.indexOf(i);

			this.list[index].parentNode.classList.remove('js-hidden');
		});
	}

	filterLanguage(language, currentCategory) {
		// hide elements that doesn't match with certain parameter
		$$(`.book[data-categories*="${currentCategory}"]:not([data-languages="${language}"])`).forEach((i) => {
			const index = this.list.indexOf(i);

			this.list[index].parentNode.classList.add('js-hidden');
		});

		// show elements that matches
		$$(`.book[data-categories*="${currentCategory}"][data-languages="${language}"]`).forEach((i) => {
			const index = this.list.indexOf(i);

			this.list[index].parentNode.classList.remove('js-hidden');
		});
	}

	filterDifficulty(difficulty, currentLanguage, currentCategory) {
		$$(`.book[data-categories*="${currentCategory}"][data-languages="${currentLanguage}"]:not([data-difficulties="${difficulty}"])`).forEach((i) => {
			const index = this.list.indexOf(i);

			this.list[index].parentNode.classList.add('js-hidden');
		});

		$$(`.book[data-categories*="${currentCategory}"][data-languages="${currentLanguage}"][data-difficulties*="${difficulty}"]`).forEach((i) => {
			const index = this.list.indexOf(i);

			this.list[index].parentNode.classList.remove('js-hidden');
		});
	}

	filter(config) {
		const {
			criterion,
			category,
			language = '',
			difficulty = '',
		} = config;

		switch (criterion) {
			case 'category': {
				this.filterCategory(category);
				break;
			}

			case 'language': {
				this.filterLanguage(language, category);
				break;
			}

			case 'difficulty': {
				this.filterDifficulty(difficulty, language, category);
				break;
			}

			default: {
				break;
			}
		}
	}

	// get categories, languages or difficulties of currently visible items
	getCriterion(criterion) {
		this[criterion] = [];

		this.list.forEach((item) => {
			// check visibility of an element
			if (!item.offsetWidth > 0 && !item.offsetHeight > 0) return;

			const criterionValues = item.getAttribute(`data-${criterion}`).toLowerCase().split(',');

			criterionValues.forEach((c) => {
				if (this[criterion].indexOf(c) === -1) this[criterion].push(c);
			});
		});

		return this[criterion];
	}
};
