// var Queue = function() {
//   var someInstance = Object.create(queueMethods);
//   someInstance.storage = {};
//   return someInstance;
// };

// var queueMethods = {
//   enqueue: function(value) { this.storage[Object.keys(this.storage).length] = value; },
//   dequeue: function() {
//     var first = this.storage[0];
//     for (var i = Object.keys(this.storage).length - 1; i > 0; i--) {
//       this.storage[i - 1] = this.storage[i];
//     }
//     delete this.storage[Object.keys(this.storage).length - 1];
//     return first;
//   },
//   size: function() { return Object.keys(this.storage).length; }
// };


// refactoring to use a counter and not rely on Object.keys

var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.counter = 0;
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
    if (this.counter === 0) {
      this.counter = 0;
    } else {
      this.counter--;
    }
    return first;
  },
  size: function() { return this.counter; }
};
