
// need to use arrays
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// Time complexity - O(n)
// We have to iterate through the entire hash (worst case) using the _.each method
HashTable.prototype.insert = function(k, v) {
  var found = false;
  var fn = this;
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    // if the bucket, isn't empty and k is already existing
    // for (var i = 0; i < this._storage.get(index).length; i++) {
    //   if (this._storage.get(index)[i][0] === k) {
    //     this._storage.get(index)[i] = [k, v];
    //     found = true;
    //   }
    // }
    _.each(this._storage.get(index), function(value, i) {
      if (value[0] === k) {
        fn._storage.get(index)[i] = [k, v];
        found = true;
      }
    });
    if (!found) {
      this._storage.get(index).push([k, v]);
    }
  }
};

// Time complexity - O(n)
// We use _.each to iterate through the bucket (worst case)
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var found;

  // for (var i = 0; i < this._storage.get(index).length; i++) {
  //   if (this._storage.get(index)[i][0] === k) {
  //     return this._storage.get(index)[i][1];
  //   }
  // }

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
  // this._storage.set(index, []);
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      this._storage.get(index)[i] = 'remove';
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */