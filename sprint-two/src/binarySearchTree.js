var BinarySearchTree = function(value) {
  var newTree = {'value': value, 'left': null, 'right': null};
  _.extend(newTree, bstTreeMethods);

  return newTree;
};

var bstTreeMethods = {};

// Time complexity - O(log n)
// Worst case scenario we need to go through half the tree
bstTreeMethods.insert = function(value, node) {
  var child = {'value': value, 'left': null, 'right': null};
  _.extend(child, bstTreeMethods);
  if (node === undefined) {
    node = this;
  }
  if (value < node.value) {
    if (node.left === null) {
      node.left = child;
    } else {
      node.insert(value, node.left);
    }
  } else {
    if (node.right === null) {
      node.right = child;
    } else {
      node.insert(value, node.right);
    }
  }
};

// Time complexity - O(log n)
// Same as above, we will at most go through half
bstTreeMethods.contains = function(target, node, found) {
  found = found || false;
  node = node || this;

  if (node.value === target) {
    return true;
  } else {

    if (target < node.value) {
      if (node.left !== null) {
        found = this.contains(target, node.left, found);
      }
    } else {
      if (node.right !== null) {
        found = this.contains(target, node.right, found);
      }
    }
  }
  return found;
};

// Time complexity - O(n)
// We NEED to go through every node, so it's linear
bstTreeMethods.depthFirstLog = function(iterator, node) {
  node = node || this;
  iterator(node.value);
  if (node.left !== null) {
    this.depthFirstLog(iterator, node.left);
  }
  if (node.right !== null) {
    this.depthFirstLog(iterator, node.right);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */