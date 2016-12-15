// var Stack = function() {
//   var someInstance = Object.create(stackMethods);
//   someInstance.storage = {};

//   return someInstance;
// };

// var stackMethods = {
//   push: function(value) { 
//     this.storage[Object.keys(this.storage).length] = value; 
//   },
//   pop: function() { 
//     var last = this.storage[Object.keys(this.storage).length - 1];
//     delete this.storage[Object.keys(this.storage).length - 1];
//     return last;
//   }, 
//   size: function() { return Object.keys(this.storage).length; }
// };


// refactoring to use counter instead of Object.keys

var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.counter = 0;
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