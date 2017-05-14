import isInCollection from './helpers/is-in-collection';
import notStrictEquals from './helpers/not-strict-equals';

import {
	createBookFromNode,
} from './book';

export default class Filters {
	constructor(options) {
		this.options = options;
		this.booksList = Array
			.from(document.querySelectorAll(options.bookSelector))
			.map(createBookFromNode);

		this.state = {
			currentTags: [],
		};
	}

	init() {
		Array
			.from(document.querySelectorAll(this.options.tagCheckboxSelector))
			.forEach((checkbox) => {
				checkbox.addEventListener('change', this.handleFilterToggle.bind(this));
			});
	}

	onUpdate() {
		const { currentTags } = this.state;

		if (currentTags.length) {
			this.booksList.forEach((book) => {
				const bookMatchesCurrentTags = currentTags.some(isInCollection(book.getTags()));

				if (bookMatchesCurrentTags) {
					book.show();
				} else {
					book.hide();
				}
			});
		} else {
			this.booksList.forEach((book) => book.show());
		}
	}

	handleFilterToggle(event) {
		const { target } = event;
		const { currentTags } = this.state;

		this.setState({
			currentTags: target.checked ?
				currentTags.concat([target.id])
				:
				currentTags.filter(notStrictEquals(target.id)),
		});
	}

	/**
	 * Sets new state
	 *
	 * @param {Object} newState
	 * @return {undefined}
	 */
	setState(newState) {
		this.state = {
			...this.state,
			...newState,
		};

		this.onUpdate();
	}
}
