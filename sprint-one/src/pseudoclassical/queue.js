var Queue = function() {
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[Object.keys(this.storage).length] = value;
};

Queue.prototype.dequeue = function() {
  var first = this.storage[0];
  for (var i = Object.keys(this.storage).length - 1; i > 0; i--) {
    this.storage[i - 1] = this.storage[i]; 
  }
  delete this.storage[Object.keys(this.storage).length - 1];
  return first;
};

Queue.prototype.size = function() { return Object.keys(this.storage).length; };
