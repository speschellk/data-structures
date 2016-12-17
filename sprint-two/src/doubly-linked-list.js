var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // Time complexity - O(1)
  // We will always know where the tail is, thus making it constant
  list.addToTail = function(value) {

    var value = Node(value);
    
    if (list.tail === null) {
      list.tail = value;
      list.head = value;
    } else {
      list.tail.next = value;
      var prevValue = list.tail;
      list.tail = value;
      list.tail.prev = prevValue;
    }
  };

  // Time complexity - O(1)
  // we will always know where the head is, thus making it constant
  list.removeHead = function() {
    var formerHead = list.head.value;
    list.head = list.head.next;
    return formerHead;
  };

  // Time complexity - O(n)
  // we need to search the list for our target node, potentially traversing through all n of them.
  list.contains = function(target, node) {
    node = node || list.head;

    if (node.value === target) {
      return true;
    } else if (node.next !== null) {
      return list.contains(target, node.next);
    }
    return false;
  };


  list.addToHead = function(value) {
    var value = Node(value);

  };

  list.removeTail = function() {

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

d




