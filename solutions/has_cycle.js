// You have a singly - linked list and want to check if it contains a cycle.

// A singly - linked list is built with nodes, where each node has:

// node.next—the next node in the list.node.value—the data held in the node.For
// example, if our linked list stores people in line at the movies, node.value
// might be the person's name.


// A cycle occurs when a node’s next points back to a previous node in the list.
// The linked list is no longer linear with a beginning and end—instead, it cycles
// through a loop of nodes.

// Write a function containsCycle() that takes the first node in a singly -
// linked list and returns a boolean indicating whether the list contains a cycle.

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

function containsCycle(node){
  let slowNode = node;
  let fastNode = node;
  let counter = 1;
  while (slowNode){
    if (fastNode === slowNode && counter != 1) return true;
    if(fastNode) fastNode = fastNode.next;
    if(counter % 2 === 0) slowNode = slowNode.next;
    counter++;
  };
  return false;
};

let a = new LinkedListNode(1)
let b = new LinkedListNode(2)
let c = new LinkedListNode(3)
let d = new LinkedListNode(4)
a.next = b
b.next = c
c.next = d
d.next = a

console.log(containsCycle(a))