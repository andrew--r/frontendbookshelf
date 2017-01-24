module.exports = class PubSub {
  on(eventName, callback) {
    this.events = this.events || {};

    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(callback);
    return this;
  }

  trigger(eventName) {
    if (this.events && this.events[eventName]) {
      this.events[eventName].forEach((i) => {
        i.call(this);
      });
    }
  }
};
