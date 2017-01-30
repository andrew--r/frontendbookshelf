module.exports = function $$(selector) {
	const nodeList = Array;

	nodeList.prototype.on = function onEvent(event, callback) {
		this.forEach((item) => {
			item.addEventListener(event, callback);
		});
	};

	return nodeList(...[].slice.call(document.querySelectorAll(selector)));
};
