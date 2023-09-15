const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
function findMinBST(node) {
  if (!node) return undefined
  if (node.left) return findMinBST(node.left)
  return node.val
}

function findMaxBST(node) {
  if (!node) return undefined
  if (node.right) return findMaxBST(node.right)
  return node.val
}

function findMinBT(node) {
  if (!node) return undefined
  let min = node.val
  let stack = [node];
  while (stack.length) {
    let curr = stack.pop()

    if (curr.val < min) min = curr.val
    if (curr.left) stack.push(curr.left)
    if (curr.right) stack.push(curr.right)
  }
  return min
}

function findMaxBT(node) {
  if (!node) return undefined
  let max = -Infinity

  let left;
  let right;

  if (node.left) {
    left = findMaxBT(node.left)
  }
  if (node.right) {
    right = findMaxBT(node.right)
  }
  if (left > max) max = left
  if (right > max) max = right
  if (node.val > max) max = node.val
  return max
}

function getHeight(node) {
  if (!node) return -1
  return 1 + Math.max(getHeight(node.left), getHeight(node.right));

  // if (!node) return -1
  // if (!node.left && !node.right) return 0
  // let levels = []

  // let queue = [node];
  // while (queue.length) {
  //   let length = queue.length
  //   for (let i = 0; i < length; i++) {
  //     let curr = queue.shift()
  //     if (curr.left) queue.push(curr.left)
  //     if (curr.right) queue.push(curr.right)
  //   }
  //   if (queue.length) levels.push("another level")
  // }
  // return levels.length

}

function countNodes(node) {
  if (!node) return undefined
  let count = 0
  let stack = [node];
  while (stack.length) {
    let curr = stack.pop()
    count++
    if (curr.left) stack.push(curr.left)
    if (curr.right) stack.push(curr.right)
  }
  return count
}

function balancedTree(node) {
  if (!node) return true
  let lh = getHeight(node.left)
  let rh = getHeight(node.right)
  if (lh === rh ||
      lh === rh + 1 ||
      lh === rh - 1) {
    return balancedTree(node.left) && balancedTree(node.right)
  }
  else return false
}

function getParentNode(node, target) {
  if (node.val === target) return null;

  let stack = [node];

  while (stack.length > 0) {
    let current = stack.pop();

    if ((current.left && current.left.val === target) ||
        (current.right && current.right.val === target)) {
      return current;
    }

    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }

  return undefined;
}

function inOrderPredecessor(node, target) {
  let current = node;
  let stack = [];
  let predecessor = null;
  debugger
  while (true) {
    debugger
    if (current) {
      stack.push(current);
      current = current.left;
    } else if (!current && stack.length > 0) {
      current = stack.pop();
      if (current.val === target) {
        if (!predecessor) return null;
        return predecessor.val;
      }
      predecessor = current;
      current = current.right;
    } else break;
  }
}

function deleteNodeBST(node, target) {
  let parentNode = getParentNode(node, target);

  // Undefined if the target cannot be found
  if (parentNode === undefined) return undefined;
  
  // Set target based on parent
  let targetNode;
  let isLeftChild = false;
  if (!parentNode) {
    targetNode = node;
  } else if (parentNode.left && parentNode.left.val === target) {
    targetNode = parentNode.left;
    isLeftChild = true;
  } else if (parentNode.right && parentNode.right.val === target) {
    targetNode = parentNode.right;
  } else {
    throw Error("Algorithm Error: This should never happen");
  }

  // Case 0: Zero children and no parent:
  //   return null
  if (!parentNode && !targetNode.left && !targetNode.right) return null;

  // Case 1: Zero children:
  //   set the parent that points to it to null
  else if (!targetNode.left && !targetNode.right) {
    if (isLeftChild) parentNode.left = null;
    else parentNode.right = null;
  }

  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor
  else if (targetNode.left && targetNode.right) {
    let predecessor = inOrderPredecessor(node, target);
    deleteNodeBST(node, predecessor);
    targetNode.val = predecessor;
  }

  // Case 3: One child:
  //   Make the parent point to the child
  else {
    if (targetNode.left) {
      if (isLeftChild) parentNode.left = targetNode.left;
      else parentNode.right = targetNode.left;
    } else {
      if (isLeftChild) parentNode.left = targetNode.right;
      else parentNode.right = targetNode.right;
    }
  }
}


bstRootBig = new TreeNode(8);
bstRootBig.left = new TreeNode(3);
bstRootBig.left.left = new TreeNode(2);
bstRootBig.left.left.left = new TreeNode(1);
bstRootBig.left.right = new TreeNode(5);
bstRootBig.left.right.left = new TreeNode(4);
bstRootBig.left.right.right = new TreeNode(7);
bstRootBig.left.right.right.left = new TreeNode(6);
bstRootBig.right = new TreeNode(10);
bstRootBig.right.right = new TreeNode(11);
bstRootBig.right.right.right = new TreeNode(12);
bstRootBig.right.right.right.right = new TreeNode(15);
bstRootBig.right.right.right.right.left = new TreeNode(14);
debugger
inOrderPredecessor(bstRootBig, 7)


module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST
}
