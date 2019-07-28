class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //Inserting methods
    addAtHead(value) {
        if (this.isEmpty()) {
            this.head = new ListNode(value);
            this.tail = this.head;
            this.length++;
            return this.length;
        }
        let node = new ListNode(value);
        node.next = this.head;
        this.head = node;
        return this.length++

    }

    addAtTail(value) {
        if (this.isEmpty()) {
            return this.addAtHead(value);

        }
        const node = new ListNode(value);
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this.length;

    }
    addAtIndex(index, value) {
        if (index > this.length) {
            return;
        } else if (index == this.length) {
            return this.addAtTail(value);
        } else if (index <= 0) {
            return this.addAtHead(value);
        } else {
            let node = new ListNode(value);
            let currentNode = this.head;
            let previousNode = null;
            while (index) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                index--;
            }
            previousNode.next = node;
            node.next = currentNode;
            return this.length++;
        }
    }
    // get methods
    get(index) {
        if (index < 0 || index > this.length -1) {
            return -1;
        }
        let currentNode = this.head;
        while (index) {
            currentNode = currentNode.next;
            index--;
        }
        return currentNode.value;
    }

    

    //Checking value methods

    isHead(node) {
        return this.head === node;
    }
    isEmpty() {
        return this.length === 0;
    }

    isTail(node) {
        return node === this.tail;
    }
    contains(value) {
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;

    }
    //Removing node methods

    removeHead() {
        if (this.head.next == null) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return;

        }
        let currentNode = this.head.next;
        this.head.next = null;
        this.head = currentNode;
        this.length--;
        return;
    }

    removeTail() {
        if (this.isHead(this.tail)) {
            this.removeHead();
            return this.head;
        }
        let currentNode = this.head;
        while (currentNode.next !== this.tail) {
            currentNode = currentNode.next;
        }
        this.tail = currentNode;
        currentNode.next = null;
        this.length--;
        return currentNode;
    }

    remove(value) {
        if (this.isEmpty()) {
            return undefined;
        }
        let currentNode = this.head;
        let previousNode = null;
        while (currentNode) {
            if (currentNode.value === value) {
                break;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        if (this.isHead(currentNode)) {
            this.removeHead();
            return;
        } else if (this.isTail(currentNode)) {
            this.removeTail();
            return;
        }
        previousNode.next = currentNode.next;
        this.length--;
        return currentNode;
    }
    deleteAtIndex(index) {
        if (index < 0 || index > this.length - 1) {
            return ;
        }
        let currentNode = this.head;
        let previousNode = null;
        while(index){
            previousNode = currentNode;
            currentNode = currentNode.next;
            index--;
        }
        if(this.isHead(currentNode)){
            return this.removeHead();
        }
        else if(this.isTail(currentNode)){
            return this.removeTail();
        }
        else{
            previousNode.next = currentNode.next;
            currentNode = null;
            this.length--;
            return;

        }
        

    }



}
// let linkedlist = new LinkedList(1);
// // linkedlist.insert(2);
// // linkedlist.insert(3);
// // linkedlist.insert(5);
// // linkedlist.removeValue(2)
// // console.log(linkedlist.head)
// // console.log(linkedlist.contains(3))
// // linkedlist.removeTail();
// // linkedlist.removeTail();
// // console.log(linkedlist.tail)
// // console.log(linkedlist.length);
// linkedlist.removeTail();
// linkedlist.insert(2);
// console.log(linkedlist);
let myll = new LinkedList();


myll.addAtHead(1);
myll.addAtIndex(1, 2);
// console.log(myll.get(1));
// console.log(myll.get(0));
console.log(myll.get(2));
// console.log(myll.head);