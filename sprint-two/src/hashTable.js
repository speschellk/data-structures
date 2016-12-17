
// need to use arrays
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  // we create an index for 'k'
  var found = false;
  var index = getIndexBelowMaxForKey(k, this._limit);
  // once the index is found, we can reference the storage with it
  // if the bucket, storage(index), is completely empty
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [[k, v]]);
  } else {
    // if the bucket, isn't empty and k is already existing
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        this._storage.get(index)[i] = [k, v];
        found = true;
      }
    }
    if (!found) {
      this._storage.get(index).push([k, v]);
    }
  }
  
  // see if the bucket is empty or filled
    // if it's empty, just add a tuple [k, v]
    // if not empty
      // and doesn't exist, push into the bucket
      // check to see if it already exists and replace the value
      

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // debugger;
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      return this._storage.get(index)[i][1];
    }
  }
};

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

// first test
// var hashTable;
// var people = [['Steven', 'Tyler'], ['George', 'Harrison'], ['Mr.', 'Doob'], ['Dr.', 'Sunshine'], ['John', 'Resig'], ['Brendan', 'Eich'], ['Alan', 'Turing']];


// it('should not contain values that were not inserted', function() {
//   hashTable.insert('Steven', 'Spielberg');
//   expect(hashTable.retrieve('Steven')).not.to.equal('Seagal');
// });