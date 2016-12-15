var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {

    // refers to new node by its value
    var value = Node(value);
    
    // if list doesn't have a tail yet
    if (list.tail === null) {
      list.tail = value;
      list.head = value;
    // if list does have a tail
    } else {
      list.tail.next = value;
      list.tail = value;
    }
    
  };

  list.removeHead = function() {
    // identify the list.head
    // find the next for list.head and point list.head to that new value
    var formerHead = list.head.value;
    list.head = list.head.next;
    return formerHead;
  };

  list.contains = function(target) {
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
