var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // Time complexity - O(1)
  list.addToTail = function(value) {

    var value = Node(value);
    
    if (list.tail === null) {
      list.tail = value;
      list.head = value;
    } else {
      list.tail.next = value;
      list.tail = value;
    }
  };

  // Time complexity - O(1)
  list.removeHead = function() {
    var formerHead = list.head.value;
    list.head = list.head.next;
    return formerHead;
  };

  // Time complexity - O(n)
  list.contains = function(target, node) {
    node = node || list.head;

    if (node.value === target) {
      return true;
    } else if (node.next !== null) {
      return list.contains(target, node.next);
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */