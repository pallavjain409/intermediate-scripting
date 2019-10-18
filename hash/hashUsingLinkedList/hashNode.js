class Node {
    constructor(key, data, next = null) {
        this.key = key;
        this.data = data;
        this.next = next;
    }
}

module.exports = Node;