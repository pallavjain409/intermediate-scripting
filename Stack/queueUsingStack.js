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
    for (let count = 0; count < this.length; count++) {
        let value = this.stack.pop();
        this.outputStack.push(value);
    }
    let poppedValue = this.outputStack.pop();
    this.length = this.length - 1;
    for (let count = 0; count < this.length; count++) {
        let value = this.outputStack.pop();
        this.stack.push(value);
    }
    return poppedValue;
};


MyQueue.prototype.peek = function () {
    for (let count = 0; count < this.length; count++) {
        let value = this.stack.pop();
        this.outputStack.push(value);
    }
    let peekValue = this.outputStack.peek;
    count = this.length;
    for (let count = 0; count < this.length; count++) {
        let value = this.outputStack.pop();
        this.stack.push(value);
    }
    return peekValue;
};


MyQueue.prototype.empty = function () {
    return this.stack.isEmpty();
};
