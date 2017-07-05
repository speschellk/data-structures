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
  this.counter = !this.counter ? 0 : this.counter - 1;
  
  return first;
};

Queue.prototype.size = function() { return this.counter; };
