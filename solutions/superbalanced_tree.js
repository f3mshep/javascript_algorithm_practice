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

function isSuperbalanced(head){
  let currentNode = head;
  let stack = [currentNode];
  let currentDepth = 0;
  let minDepth = 1;
  let maxDepth = null;
  while(stack.length > 0){
    currentDepth++
    if (currentNode.left){
      stack.push(currentNode.left)
    };
    if(currentNode.right){
      stack.push(currentNode.right)
    };
    if(!currentNode.left && !currentNode.right){
        if (minDepth == 1) {
          minDepth = currentDepth
        }
        if(currentDepth > maxDepth){
          maxDepth = currentDepth
        }
        if(currentDepth < minDepth){
          minDepth = currentDepth
        }
        if(Math.abs(maxDepth - minDepth) > 1) return false;
      currentDepth = 1;
    }
    currentNode = stack.pop()
  };
  return true;
}