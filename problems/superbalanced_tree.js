// Write a function to see if a binary tree is "superbalanced"
// (a new tree property we just made up).

// A tree is "superbalanced" if the difference between the
// depths of any two leaf nodes is no greater than one.

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

function isSuperbalanced(head) {

}