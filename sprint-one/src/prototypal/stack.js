var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};

  return someInstance;
};

var stackMethods = {
  push: function(value) { 
    this.storage[Object.keys(this.storage).length] = value; 
  },
  pop: function() { 
    var last = this.storage[Object.keys(this.storage).length - 1];
    delete this.storage[Object.keys(this.storage).length - 1];
    return last;
  }, 
  size: function() { return Object.keys(this.storage).length; }
};