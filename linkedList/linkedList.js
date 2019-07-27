class LinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    insert(value) {
        if (this.isEmpty()) {
            this.head = {
                value,
                next: null
            }
            this.tail = this.head;
            this.length++;
            return this.length;
            // this = new LinkedList(value); why this is showing error?
        }
        const node = {
            value,
            next: null
        }
        this.tail.next = node;
        this.tail = node;
        this.length++;
        return this.length;

    }
    isHead(node) {
        return node === this.head;
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
        if (currentNode === this.head) {
            this.head == currentNode.next;
        }
        previousNode.next = currentNode.next;
        this.length--;
        return currentNode;
    }

    isEmpty() {
        return this.length === 0;
    }

    isTail(node) {
        return !!node === this.tail;
    }
    removeTail() {
        if (this.tail === this.head) {
            this.head.value = null;
            this.tail = this.head;
            this.length--;
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

}
let linkedlist = new LinkedList(1);
// linkedlist.insert(2);
// linkedlist.insert(3);
// linkedlist.insert(5);
// linkedlist.removeValue(2)
// console.log(linkedlist.head)
// console.log(linkedlist.contains(3))
// linkedlist.removeTail();
// linkedlist.removeTail();
// console.log(linkedlist.tail)
// console.log(linkedlist.length);
linkedlist.removeTail();
linkedlist.insert(2);
console.log(linkedlist);