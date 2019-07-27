class DoublyLinkedList {
    constructor(value) {
        this.head = {
            prev: null,
            value,
            next: null
        };
        this.tail = this.head;
        this.length = 1;
    }
    insert(value) {
        if (this.isEmpty()) {
            this.head = {
                prev: null,
                value,
                next: null
            };
            this.tail = this.head;
            this.length = 1;
            return;
        }
        const node = {
            prev: null,
            value,
            next: null
        };
        this.tail.next = node;
        node.prev = this.tail;
        node.next = null;
        this.tail = node;
        this.length++;
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
    removeTail() {
        if (this.head === this.tail) {
            this.head.value = null;
            this.head.next = null;
            this.head = this.tail;
            this.length = 0;
            return;

        }
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.length--;
        return
    }
    remove(value) {
        if (!this.contains(value)) {
            return undefined
        }
        let currentNode = this.head;
        while (currentNode !== null) {
            if (currentNode.value === value) {
                break;
            }
            currentNode = currentNode.next;
        }
        if (currentNode === this.head) {
            this.head = currentNode.next;
            this.head.prev = null;
            this.length--;
            return
        }
        currentNode.prev.next = currentNode.next;
        this.length--;
    }

    isEmpty() {
        return this.length === 0;
    }

}
let dll = new DoublyLinkedList(1);
// dll.insert(2);
// dll.insert(3);
// dll.removeTail();
dll.insert(2);
dll.insert(3);
dll.remove(1);
dll.insert(3);
dll.insert(4);

console.log(dll.head)