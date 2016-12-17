
// need to use arrays
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// Time complexity - O(n)
// We have to iterate through the entire hash (worst case) using the _.each method
HashTable.prototype.insert = function(k, v) {
  var blankKey;
  var found = false;
  var fn = this;
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    _.each(this._storage.get(index), function(value, i) {
      if (value[0] === k) {
        fn._storage.get(index)[i] = [k, v];
        found = true;
      }
      // While iterating through, we want to see if there are any blank key values
      // Keeping it within this each loop allows us to maintain a linear time complexity
      if (value[0] === '') {
        blankKey = i;
      }
    });
    if (!found) {
      // We check if a blank key was found in this index and fill in the blank to reduce the number of tuples
      if (blankKey !== undefined) {
        this._storage.get(index)[blankKey] = [k, v];
      } else {
        this._storage.get(index).push([k, v]);
      }
    }
  }
};

// Time complexity - O(n)
// We use _.each to iterate through the bucket (worst case)
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var found;
  _.each(this._storage.get(index), function(value, i) {
    if (value[0] === k) {
      found = value[1];
    }
  });
  return found;
};

// Time complexity - O(n)
// We iterate through the bucket (worst case)
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  /*
  worst case scenario is if we constantly remove and remove all nodes
  we would have a hash table with only blank values
  However, we can maintain the time complexity for this by filtering out blank, ''
  keys during resizing of the hash table. Since we need to go through each value anyway, 
  we can filter out blank keys before choosing the size of the new table
  */
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      this._storage.get(index)[i] = '';
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */