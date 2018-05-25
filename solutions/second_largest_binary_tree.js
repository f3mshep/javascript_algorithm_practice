//Write a function to find the 2nd largest element in a binary search tree.

function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function (value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function (value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

function secondLargestElementBST(head) {
  if(!head.left && !head.right) throw "Head must have at least one child"
  let stack = [head];
  let parentNode;
  let currentNode;
  while (stack.length > 0){
    currentNode = stack.pop()
    if (currentNode.right){
      //prefer right as it has higher value
      stack.push(currentNode.right)
    }
    else if(currentNode.left){
      stack.push(currentNode.left)
    }
    else{
      //break (avoiding parentNode assignment)
      break;
    }
    parentNode = currentNode;
  };
  // if parentNode has right child, then the parentNode has the second highest
  // value
  // if the parentNode does not, then the parentNode has the highest value.
  // therefore, the left child has the second highest value
  if(parentNode.right){
    return parentNode.value
  }
  else{
    return parentNode.left.value
  }
}

//       20
//       /\
//     18  23
//    /\    /\
//  17  19 22 26

let a = Object.create(BinaryTreeNode)
let b = Object.create(BinaryTreeNode)
let c = Object.create(BinaryTreeNode)
let d = Object.create(BinaryTreeNode)
let e = Object.create(BinaryTreeNode)
let f = Object.create(BinaryTreeNode)
let g = Object.create(BinaryTreeNode)

a.value = 20
b.value = 18
c.value = 23
d.value = 17
e.value = 19
f.value = 22
g.value = 26
a.left = b
a.right = c
b.left = d
b.right = e
c.left = f
c.right = g

console.log(secondLargestElementBST(a));