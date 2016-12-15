// var Stack = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
//   var someInstance = {storage: {}};
//   _.extend(someInstance, stackMethods);

//   return someInstance;
// };

// var stackMethods = {
//   push: function(value) { this.storage[Object.keys(this.storage).length] = value; },
//   pop: function() { 
//     var last = this.storage[Object.keys(this.storage).length - 1];
//     delete this.storage[Object.keys(this.storage).length - 1];
//     return last;
//   },
//   size: function() { return Object.keys(this.storage).length; }
// };

// refactoring to not relly on anything that returns an array

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
    if (this.counter === 0) {
      this.counter = 0;
    } else {
      this.counter--;
    }
    return last;
  },
  size: function() { return this.counter; }
};
