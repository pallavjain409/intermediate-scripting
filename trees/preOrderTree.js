var preorder = function(root) {
    let result = [];
      if (!root){
         return result
         }
    function traverse(root){
        result.push(root.val)
        if (root.children){
        root.children.forEach(child =>{
        traverse(child)
        });
        }
    }
    traverse(root);
    return result;
};