var Stack = function() {
  var someInstance = {};
  var keys;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    keys = Object.keys(storage);
    var index = keys.length;
    storage[index] = value;
    // storage[Object.keys(storage).length] = value;
  };

  someInstance.pop = function() {
    keys = Object.keys(storage);
    var last = storage[keys.length - 1];
    delete storage[keys.length - 1];
    return last;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;

};
