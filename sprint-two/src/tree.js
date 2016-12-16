//functional-shared instantiation
var Tree = function(value) {
  var newTree = {'value': value};
  _.extend(newTree, treeMethods);
  newTree.children = [null];
  return newTree;
};

var treeMethods = {};

// Time complexity - O(1)
// We are only ever looking at one value and determining how to add the child
treeMethods.addChild = function(value) {
  var child = {'value': value, children: [null]};
  _.extend(child, treeMethods);
  if (this.children[0] === null) {
    this.children[0] = child;
  } else {
    this.children.push(child);
  }
};

// Time complexity - O(n)
// We traverse the tree to find the target value, worst case would be to go through all n number of values
treeMethods.contains = function(target, node, found) {
  if (found === undefined) {
    found = false;
  }
  if (node === undefined) {
    // node = {value: this.value, children: this.children};
    node = this;
    if (node.value === target) {
      return true;
    }
  }
  for (var i = 0; i < node.children.length; i++) {
    if (node.children[i] !== null) {
      if (node.children[i].value === target) {
        return true;
      }
      found = this.contains(target, node.children[i], found);
    }
  }
  return found;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */