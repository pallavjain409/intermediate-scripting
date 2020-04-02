/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  let count = 0
  let res ;
  function inorder(root){
      if (!root){
          return
      }
      if (root.left){
          inorder(root.left)
      }
      count++
      if (count === k){
          res = root.val
      }
      if (root.right){
          inorder(root.right)
      }
      return
  }  
  inorder(root)
  return res 
};