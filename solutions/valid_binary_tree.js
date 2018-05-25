// Write a function to check that a binary tree is a valid binary search tree.

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


// function isValidTree(head){
//   let stack = [head];
//   let currentNode;
//   while (stack.length > 1){
//     currentNode = stack.pop()
//     if (currentNode.left){
//       stack.push(nodeInfo)
//     };
//     if (currentNode.right){
//       stack.push(currentNode.right)
//     };
//   };
//   return true
// };
MIN = -Number.MAX_SAFE_INTEGER
MAX = Number.MAX_SAFE_INTEGER

function isValidTree(node, lower, upper){
  lower = lower || MIN
  upper = upper || MAX
  let validLeft = true;
  let validRight = true;
  if(node.value >= upper || node.value <= lower) return false
  if (node.right){
    validLeft =  isValidTree(node.right,node.value, upper )
  }
  if (node.left){
    validRight =  isValidTree(node.left, lower, node.value)
  }
  return validLeft === true && validRight === true ? true : false
};

console.log(isValidTree(a))