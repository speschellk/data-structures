var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.removeTail = function() {
    var formerTail = list.tail.value;
    if (list.tail !== list.head) {
      list.tail.prev.next = null;
    }
    list.tail = list.tail.prev;
    return formerTail;
  };


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
    if (list.head !== list.tail) {
      list.head = list.head.next;
      list.head.prev = null;
    }
    return formerHead;
  };

  list.addToHead = function(value) {
    var value = Node(value);
    value.next = list.head;
    list.head.prev = value;
    list.head = value;
  };

  list.insert = function(value, next) {
    
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