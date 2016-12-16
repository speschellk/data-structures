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

bstTreeMethods.contains = function(target) {

};

bstTreeMethods.depthFirstLog = function(cb) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var bst = BinarySearchTree(5);
bst.insert(2);
bst.insert(3);
bst.insert(7);
bst.insert(6);
console.log(bst);
console.log(bst.right);


