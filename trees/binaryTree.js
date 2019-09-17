class BinaryNode {
    constructor(data = null, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor(data = null) {
        this.root = data;
    }
    add(data) {
        const newNode = new BinaryNode(data);
        if (this.root == null) {
            this.root = newNode;
            return;
        } else {
            function search(node) {
                if (node.data > data) {
                    if (node.left == null) {
                        node.left = newNode;
                        return
                    } else if (node.left !== null) {
                        return search(node.left)
                    }

                } else if (node.data < data) {
                    if (node.right == null) {
                        node.right = newNode;
                        return;
                    } else if (node.right != null) {
                        return search(node.right)
                    }
                } else {
                    return null;
                }
            }
            search(this.root);
        }
    }
    findMin() {
        if (this.isEmpty()) {
            return null;
        } else if (!this.root.left) {
            return this.root.data;
        } else {
            let currentNode = this.root;
            while (currentNode.left != null) {
                currentNode = currentNode.left;
            }
            return currentNode.data;
        }

    }

    findMax() {
        if (this.isEmpty()) {
            return null;
        } else if (!this.root.right) {
            return this.root.data;
        } else {
            let currentNode = this.root;
            while (currentNode.right) {
                currentNode = currentNode.right;
            }
            return currentNode.data;
        }
    }
    isPresent(data) {
        let current = this.root;
        while (current) {
            if (current.data == data) {
                return true;
            }
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;

    }
    find(data) {
        let current = this.root;
        while (current) {
            if (current.data == data) {
                return current;
            }
            if (current.data > data) {
                current = current.left;
            } else {
                current = current.right;
            }

        }
        return null;
    }

    isEmpty() {
        return this.root == null;
    }
    //Searches


    //Depth first search(branch by branch)

    //dfsInorder(left , root , right)
    dfsInorder() {
        let result = [];
        const traverse = node => {
            if (node.left) {
                traverse(node.left);
            }
            result.push(node.data);
            if (node.right) {
                traverse(node.right)
            }
        }
        traverse(this.root)

        return result;
    }
    //dfs inorder (root, left , right)
    dfsPreOrder() {
        let result = [];

        const traverse = node => {
            result.push(node.data);
            if (node.left) {
                traverse(node.left)
            }
            if (node.right) {
                traverse(node.right)
            }
        }
        traverse(this.root);

        return result;
    }

    //dfs PostOrder
    //left right root  
    dfsPostOrder() {
        let result = [];
        const traverse = node => {
            if (node.left) {
                traverse(node.left)
            }
            if (node.right) {
                traverse(node.right)
            }
            result.push(node.data);
        }


        traverse(this.root)
        return result;
    }

    // Breadth first search
    bfs() {
        let queue = [];
        let result = [];
        queue.push(this.root);
        while (queue.length) {
            let current = queue.shift();
            result.push(current.data);
            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right);
            }
        }


        return result;
    }


}
let bt = new BinaryTree();
bt.add(15);
bt.add(3);
bt.add(36);
bt.add(2);
bt.add(12);
bt.add(28);
bt.add(39);
// console.log(bt.findMin());
// console.log(bt.findMax());
console.log(bt.isPresent(-333))
console.log(bt.find(9));
console.log(bt.dfsInorder());
console.log(bt.dfsPreOrder());
console.log(bt.dfsPostOrder());
console.log(bt.bfs());