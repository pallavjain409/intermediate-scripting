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
        let result = linkedList.getDataOfKey(key);
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

let h = new HashTable()
h.set("Instructor", "Gopi");
console.log(h.get("Instructor"))
