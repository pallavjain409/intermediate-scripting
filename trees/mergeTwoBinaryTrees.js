var mergeTrees = function(t1, t2) {
    if (t1 == null && t2 == null){
        return null;
    }
    else if (t1 && t2 == null){
        return t1
    }
    else if (t1 == null && t2){
        return t2
    }
    let newTree = new TreeNode(t1.val + t2.val);
    newTree.left = mergeTrees(t1.left, t2.left); 
    newTree.right = mergeTrees(t1.right, t2.right);
    return newTree;
};
