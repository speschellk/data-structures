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
  this.counter = !this.counter ? 0 : this.counter - 1;
  
  return last;
};

Stack.prototype.size = function() {
  return this.counter;
};

