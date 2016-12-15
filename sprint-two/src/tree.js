//functional-shared instantiation
var Tree = function(value) {
  var newTree = {'value': value};
  _.extend(newTree, treeMethods);
  newTree.children = [null, null];  // fix me
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // look at top value first
  var child = {'value': value, children: [null, null]};
  if (this.value === undefined) {
    this.children[0] = child;
  // } else {
  //   if (value >= this.children[0].value) {
  //     this.children[2] = {'value': null};
  //   } else {
  //     this.children[1] = [{'value': value}, null, null];
  //   }
  }
};

treeMethods.contains = function(target) {
  // if the first thing in the tree === target
    // then return true
  // else, look at the children
    // pass children through contains function
  if ('some value' === target) {
    return true;
  } else {

  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
// var tree = Tree();
// tree.addChild(5);
// console.log('tree');
// console.log(tree);
// console.log(tree.children[0].value);



