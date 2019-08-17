const Stack = require('./Stack.js');

var MyQueue = function () {
    this.stack = new Stack();
    this.outputStack = new Stack();
    this.length = 0;
};


MyQueue.prototype.push = function (x) {
    this.stack.push(x);
    this.length++
    return this.length;
};


MyQueue.prototype.pop = function () {
    let count = this.length;
    while (count) {
        let value = this.stack.pop();
        this.outputStack.push(value);
        count--;
    }
    let poppedValue = this.outputStack.pop();
    this.length = this.length - 1;
    count = this.length;
    while (count) {
        let value = this.outputStack.pop();
        this.stack.push(value);
        count--;
    }
    return poppedValue;
};


MyQueue.prototype.peek = function () {
    let count = this.length;
    while (count) {
        let value = this.stack.pop();
        this.outputStack.push(value);
        count--;
    }
    let peekValue = this.outputStack.peek;
    count = this.length;
    while (count) {
        let value = this.outputStack.pop();
        this.stack.push(value);
        count--;
    }
    return peekValue;
};


MyQueue.prototype.empty = function () {
    return this.stack.isEmpty();
};