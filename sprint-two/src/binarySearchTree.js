var BinarySearchTree = function(value) {
  var newTree = {'value': value, 'left': null, 'right': null};
  _.extend(newTree, bstTreeMethods);

  return newTree;
};

var bstTreeMethods = {};

bstTreeMethods.insert = function(value, node) {
  var child = {'value': value, 'left': null, 'right': null};
  _.extend(child, bstTreeMethods);
  if (node === undefined) {
    node = this;
  }
  if (value >= node.value) {
    if (node.right === null) {
      node.right = child;
    } else {
      node.insert(value, node.right);
    }
  } else {
    if (node.left === null) {
      node.left = child;
    } else {
      node.insert(value, node.left);
    }
  }
};

bstTreeMethods.contains = function(target, node, found) {
  found = found || false;
  node = node || this;

  if (node.value === target) {
    return true;
  } else {

    if (target > node.value) {
      if (node.right !== null) {
        found = this.contains(target, node.right, found);
      }
    } else {
      if (node.left !== null) {
        found = this.contains(target, node.left, found);
      }
    }
  }
  return found;
};

bstTreeMethods.depthFirstLog = function(iterator, node) {
  // need to start at the top and traverse down the tree via recursion
  node = node || this;
  iterator(node.value);
  // if (target > node.value) {
  //   if (node.right !== null) {
  //     found = this.contains(target, node.right, found);
  //   }
  // } else {
  //   if (node.left !== null) {
  //     found = this.contains(target, node.left, found);
  //   }
  // }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var array = [];
var func = function(value) { array.push(value); };
var bst = BinarySearchTree(5);
bst.insert(2);
bst.insert(3);

bst.depthFirstLog(func);
console.log(array);



