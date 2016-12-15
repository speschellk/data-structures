// var Stack = function() {
//   this.storage = {};
// };

// Stack.prototype.push = function(value) {
//   this.storage[Object.keys(this.storage).length] = value;
// };

// Stack.prototype.pop = function () {
//   var last = this.storage[Object.keys(this.storage).length - 1];
//   delete this.storage[Object.keys(this.storage).length - 1];
//   return last;
// };

// Stack.prototype.size = function() {
//   return Object.keys(this.storage).length;
// };

// refactoring code to use counter instead of Object.key

var Stack = function() {
  this.storage = {};
  this.counter = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

Stack.prototype.pop = function () {
  var last = this.storage[this.counter - 1];
  delete this.storage[this.counter - 1];
  if (this.counter === 0) {
    this.counter = 0;
  } else {
    this.counter--;
  }
  return last;
};

Stack.prototype.size = function() {
  return this.counter;
};

