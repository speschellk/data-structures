// var Queue = function() {
//   this.storage = {};
// };

// Queue.prototype.enqueue = function(value) {
//   this.storage[Object.keys(this.storage).length] = value;
// };

// Queue.prototype.dequeue = function() {
//   var first = this.storage[0];
//   for (var i = Object.keys(this.storage).length - 1; i > 0; i--) {
//     this.storage[i - 1] = this.storage[i]; 
//   }
//   delete this.storage[Object.keys(this.storage).length - 1];
//   return first;
// };

// Queue.prototype.size = function() { return Object.keys(this.storage).length; };

//refactoring code to use a counter and not use Object.keys

var Queue = function() {
  this.storage = {};
  this.counter = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

Queue.prototype.dequeue = function() {
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
};

Queue.prototype.size = function() { return this.counter; };
