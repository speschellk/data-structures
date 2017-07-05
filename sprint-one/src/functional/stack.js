var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function() {
    var last = storage[counter - 1];
    delete storage[counter - 1];
    counter = !counter ? 0 : counter - 1;

    return last;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
