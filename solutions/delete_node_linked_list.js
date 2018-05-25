// Delete a node from a singly - linked list, ↴ given only a variable pointing to that node.
// The input could, for example, be the variable b below:

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

var a = new LinkedListNode('A');
var b = new LinkedListNode('B');
var c = new LinkedListNode('C');

a.next = b;
b.next = c;

function delete_node_linked_list(node){
  if (node.next){
    node.value = node.next.value
    node.next = node.next.next
  } else {
    node.value = null
    node.next = null
  };
};
