import showNode from './helpers/show-node';
import hideNode from './helpers/hide-node';

export class Book {
	constructor(node) {
		this.node = node;
		this.tags = node.getAttribute('data-tags').split(',');
	}

	getNode() {
		return this.node;
	}

	getTags() {
		return this.tags;
	}

	show() {
		showNode(this.node.parentNode);
	}

	hide() {
		hideNode(this.node.parentNode);
	}
}

export function createBookFromNode(node) {
	return new Book(node);
}
