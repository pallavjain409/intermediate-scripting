const Node = require('./hashNode')

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
        this.tail = null;
    }

    addFirst(key, data) {
        let node = new Node(key, data);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = this.head;
        } else {
            node.next = this.head;
            this.head = node
        }
        this.length++;
        return this.length
    }

addEnd(key, data) {
        if (this.isEmpty()) {
            return this.addFirst(key, data);
        }
        let newNode = new Node(key, data);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this.length;
    }

    deleteFirst() {
        if (this.isEmpty()) {
            return this.head;
        }
        if (this.head == this.tail) {
            this.tail = null;
        }
        let curr = this.head;
        this.head = this.head.next;
        curr.next = null;
        this.length--;
        return curr;
    }

    deleteEnd() {
        if (this.isEmpty()) {
            return "Empty"
        }
        if (this.head == this.tail) {
            return this.deleteFirst()
        }
        let curr = this.head;
        curr = this.traverse(curr, (curr) => curr.next != this.tail, 0);
        let node = this.tail;
        curr.next = null;
        this.tail = curr;
        this.length--;
        return node;
    }

    deleteDataOfKey(key, data) {
        if (this.isEmpty()) {
            return undefined
        }
        if (this.head.key == key && this.head.data == data) {
            return this.deleteFirst()
        }
        if (this.tail.key == key && this.tail.data == data) {
            return this.deleteEnd()
        }
        let prev = this.head;
        let curr = this.head.next;
        while (curr) {
            if (curr.val == key && curr.data == data) {
                prev.next = curr.next;
                curr.next = null;
                this.length--;
            }
            curr = curr.next;
            prev = prev.next;
        }
        return curr;
    }

    deleteKey() {
        if (this.isEmpty()) {
            return this.head
        }
        let node = this.head;
        this.head = null;
        this.tail = this.head;
        this.length = 0;
        return node;
    }






    isEmpty() {
        return this.head == null;
    }


    traverse(curr, condition) {
        while (condition(curr)) {
            curr = curr.next;
        }
        return curr;
    }

}

// let ll = new LinkedList();
// ll.addFirst(1);
// ll.append(2);
// ll.append(3);
// ll.append(5);
// console.log(ll.deleteValue(5));
// console.log("ll:",ll)
module.exports = LinkedList;