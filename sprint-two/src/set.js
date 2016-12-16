var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

// Time complexity - O(1)
// We add the value into the object, without needing to organize the data
setPrototype.add = function(item) {
  this._storage[item] = item;
};

// Time complexity - O(1)
// We check a single point and return true or false based on if it exists
setPrototype.contains = function(item) {
  return this._storage[item] !== undefined ? true : false;
};

// Time complexity - O(1)
// We only check a single point and delete it if it exists
setPrototype.remove = function(item) {
  if (this._storage[item] !== undefined) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
