class Trees{
    constructor(value){
        this.value = value;
        this.children = [];
    }
    insertChild(value){
        const newTree = new Trees(value);
        this.children.push(newTree);
        return newTree;
    }
}

function traverse(tree){
    console.log(tree.value);
   if(tree.children.length != 0){
       tree.children.forEach(children => {
           return traverse(children)
           
       });
   }
}

let myTree = new Trees(1);
let myTree2 = myTree.insertChild(2);
let myTree3 = myTree2.insertChild(3);
let myTree4 = myTree3.insertChild(4);
let myTree5 = myTree.insertChild(5);
console.log(myTree5)
console.log(myTree);

traverse(myTree);