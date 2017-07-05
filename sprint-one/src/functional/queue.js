var Queue = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    var first = storage[0];
    for (var i = counter - 1; i > 0; i--) {
      storage[i - 1] = storage[i];
    }
    delete storage[counter - 1];
    counter = !counter ? 0 : counter - 1;

    return first;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};