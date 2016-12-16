
// Instantiate a new graph
var Graph = function() {
  this.newGraph = {};
};

// Time complexity - O(1)
// We add in a value without needing to organize them in any order
Graph.prototype.addNode = function(node) {
  this.newGraph[node] = {};
};

// Time complexity - O(1)
// We check to see if the key exists. If it exists, we return true
Graph.prototype.contains = function(node) {
  // if (this.newGraph[node] !== undefined) {
  //   return true;
  // }
  // return false;
  return this.newGraph[node] !== undefined ? true : false;
};

// Time complexity - O(n)
// We need to iterate through all the keys to see if it has the edge of the deleted
Graph.prototype.removeNode = function(node) {
  // if (this.newGraph[node] !== undefined) {
  //   delete this.newGraph[node];
  // }
  // for (var key in this.newGraph) {
  //   if (this.newGraph[key][node] !== undefined) {
  //     delete this.newGraph[key][node];
  //   }
  // }

  if (this.newGraph[node] !== undefined) {
    for (var key in this.newGraph[node]) {
      delete this.newGraph[key][node];
    }
    delete this.newGraph[node];
  }
};

// Time complexity - O(1)
// We always check a single point to see if it exists
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.newGraph[fromNode][toNode] === '' ? true : false;
};

// Time complexity - O(1)
// We assign values in at a key, without iterating through a list
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.newGraph[fromNode][toNode] = '';
  this.newGraph[toNode][fromNode] = '';
};

// Time complexity - O(1)
// We delete values, without needing to reorganize
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.newGraph[fromNode][toNode];
  delete this.newGraph[toNode][fromNode];
};

// Time complexity - O(n)
// We iterate for all keys in the graph
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.newGraph) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
