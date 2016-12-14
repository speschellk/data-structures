var Queue = function() {
  var someInstance = {'storage': {}};
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[Object.keys(this.storage).length] = value;
  },
  dequeue: function() {
    var first = this.storage[0];
    for (var i = Object.keys(this.storage).length - 1; i > 0; i--) {
      this.storage[i - 1] = this.storage[i];
    }
    delete this.storage[Object.keys(this.storage).length - 1];
    return first;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};


