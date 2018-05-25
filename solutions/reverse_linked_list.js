// Reverse a linked list given the head node. Do it in-place.

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

function reverseLinkedList(head){
  let currentNode = head;
  let prevNode = null;
  let nextNode;
  while (currentNode){
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
  }
  return prevNode;
}

let a = new LinkedListNode(1)
let b = new LinkedListNode(2)
let c = new LinkedListNode(3)
let d = new LinkedListNode(4)
a.next = b
b.next = c
c.next = d

console.log(reverseLinkedList(a))
debugger