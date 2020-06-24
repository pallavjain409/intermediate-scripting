/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if (!root){
        return 0
    }
  let left = 1;
  let right = 1;
  let curr = root;
    while(curr.left){
        left++
        curr = curr.left
    }
    curr = root;
    while(curr.right){
        right++
        curr = curr.right;
    }
    if (left == right){
        return (Math.pow(2, left) - 1)
    }
    else {
        return  1+ countNodes(root.left) + countNodes(root.right)
    }
};