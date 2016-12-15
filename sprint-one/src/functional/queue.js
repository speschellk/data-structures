// var Queue = function() {
//   var someInstance = {};

//   // Use an object with numeric keys to store values
//   var storage = {};

//   // Implement the methods below

//   someInstance.enqueue = function(value) {
//     storage[Object.keys(storage).length] = value;
//   };

//   someInstance.dequeue = function() {
//     var first = storage[0];
//     for (var i = Object.keys(storage).length - 1; i > 0; i--) {
//       storage[i - 1] = storage[i];
//     }
//     delete storage[Object.keys(storage).length - 1];
//     return first;
//   };

//   someInstance.size = function() {
//     return Object.keys(storage).length;
//   };

//   return someInstance;
// };


// refactored code not relying on anything that returns arrays

var Queue = function() {
  var someInstance = {};
  var counter = 0;
  // Use an object with numeric keys to store values
  var storage = {};

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

    if (counter === 0) {
      counter = 0;
    } else {
      counter--;
    }
    return first;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};