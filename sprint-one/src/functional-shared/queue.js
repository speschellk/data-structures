var Queue = function() {
  var someInstance = {'storage': {}, 'counter': 0};
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },
  dequeue: function() {
    var first = this.storage[0];
    for (var i = this.counter - 1; i > 0; i--) {
      this.storage[i - 1] = this.storage[i];
    }
    delete this.storage[this.counter - 1];
    this.counter = !this.counter ? 0 : this.counter - 1;

    return first;
  },
  size: function() {
    return this.counter;
  }
};
