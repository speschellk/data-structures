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
    node = {value: this.value, children: this.children};
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
var tree = Tree(4);
tree.addChild(5);
tree.addChild(6);
tree.children[0].addChild(7);
tree.children[1].addChild(8);
console.log(tree);
console.log('find root?: ' + tree.contains(4));
console.log('contain 5?: ' + tree.contains(5));
console.log('contain 6?: ' + tree.contains(6));
console.log('contain 7?: ' + tree.contains(7));
console.log('contain 8?: ' + tree.contains(8));

