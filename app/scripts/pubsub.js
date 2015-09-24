module.exports = function() {
  this.on = function(eventName, callback) {
    this.events = this.events || {};

    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(callback);
    return this;
  };

  this.trigger = function(eventName) {
    if (this.events && this.events[eventName]) {
      this.events[eventName].forEach((i) => {
        i.call(this);
      });
    }
  };
}