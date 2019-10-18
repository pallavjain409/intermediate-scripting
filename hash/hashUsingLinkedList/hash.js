const LinkedList = require('./linkedList')
class HashTable {
    constructor(size = 10) {
        this.size = size;
        this.array = []
        for (let i = 0; i < this.size; i++) {
            this.array.push(new LinkedList());
        }
    }

    hash(key) {
        let sum = 0;
        for (let element of key) {
            sum += element.charCodeAt(0);
        }
        return sum % this.size;
    }

    set(key, data) {
        let keyIndex = this.hash(key);
        let linkedList = this.array[keyIndex];
        return linkedList.addEnd(key, data)
    }

    get(key) {
        let keyIndex = this.hash(key);
        let linkedList = this.array[keyIndex];
        if (linkedList.head == null) {
            return new Error("Key does not exist");
        }
        let result = [];
        let node = linkedList.head;
        while (node) {
            if (node.key == key) {
                result.push(node.key + " -> " + node.data);
            }
            node = node.next;
        }
        return result
    }

    delete(key, data) {
        let keyIndex = this.hash(key);
        let linkedList = this.array[keyIndex];
        if (linkedList.head == null) {
            return new Error("Key does not exist");
        }
        if (data) {
            return linkedList.deleteDataOfKey(key, data);
        } else {
            return linkedList.deleteKey();
        }

    }
}

