module.exports = function(selector) {
  var nodeList = Array;

  nodeList.prototype.on = function(event, callback) {
    this.forEach((item) => {
      item.addEventListener(event, callback);
    });
  };

  return nodeList.apply(null, [].slice.call(document.querySelectorAll(selector)));
}