const Queue = require('./queue');

var MyStack = function () {
    this.queue = new Queue;
};

MyStack.prototype.push = function (x) {
    this.queue.enqueue(x);
};

MyStack.prototype.pop = function () {
    if (this.queue.isEmpty()) {
        return "Empty"
    }
    for (let i = 0; i <= this.queue.length - 2; i++) {
        let value = this.queue.dequeue();
        this.queue.enqueue(value);
    }
    return this.queue.dequeue();
};

MyStack.prototype.top = function () {
    let value
    for (let i = 0; i < this.queue.length; i++) {
        value = this.queue.dequeue();
        this.queue.enqueue(value);
    }
    return value;
};

MyStack.prototype.empty = function () {
    return this.queue.isEmpty();
};