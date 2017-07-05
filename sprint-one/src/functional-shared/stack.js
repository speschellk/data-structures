var Stack = function() {
  var someInstance = {storage: {}, counter: 0};
  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },
  pop: function() { 
    var last = this.storage[this.counter - 1];
    delete this.storage[this.counter - 1];
    this.counter = !this.counter ? 0 : this.counter - 1;

    return last;
  },
  size: function() { return this.counter; }
};
