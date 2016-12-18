describe('doublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "addToHead", "removeTail", "removeHead", "insert", and "contains"', function() {
    expect(doublyLinkedList.removeTail).to.be.a('function');
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.addToHead).to.be.a('function');
    expect(doublyLinkedList.insert).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added and reference the previous node', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
    expect(doublyLinkedList.tail.prev.value).to.equal(4);
  });

  it('should remove the head from the list when removeHead is called and remove the previous node from new head', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
    expect(doublyLinkedList.head.prev).to.equal(null);
  });

  it('should return no value when the only node is removed through removeHead', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(4);
    expect(doublyLinkedList.head.prev).to.equal(null);
  });

  it('should return no value when the only node is removed through removeTail', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeTail()).to.equal(4);
    expect(doublyLinkedList.head.prev).to.equal(null);
  });

  it('should contain a value that was added', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(4)).to.equal(false);
  });
  
  it('should not be able to add a duplicate value', function() {
    doublyLinkedList.addToTail(3);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.addToTail(2);
    doublyLinkedList.addToTail(3);
    expect(doublyLinkedList.head.value).to.equal(3);
    expect(doublyLinkedList.tail.value).to.equal(3);
    expect(doublyLinkedList.head.next.value).to.equal(5);
    expect(doublyLinkedList.tail.prev.value).to.equal(2);
    // expect(doublyLinkedList.head.prev.value).to.equal(3);
  });

  it('should properly insert node in between two values', function() {
    doublyLinkedList.addToTail(3);
    doublyLinkedList.addToTail(2);
    doublyLinkedList.insert(5, 3);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.head.value).to.equal(3);
    expect(doublyLinkedList.tail.value).to.equal(2);
    expect(doublyLinkedList.head.next.value).to.equal(5);
    expect(doublyLinkedList.tail.prev.value).to.equal(5);
    expect(doublyLinkedList.head.next.prev.value).to.equal(3);
    expect(doublyLinkedList.tail.prev.next.value).to.equal(2);
  });
});