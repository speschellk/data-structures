var Stack = function() {
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[Object.keys(this.storage).length] = value;
};

Stack.prototype.pop = function () {
  var last = this.storage[Object.keys(this.storage).length - 1];
  delete this.storage[Object.keys(this.storage).length - 1];
  return last;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};

