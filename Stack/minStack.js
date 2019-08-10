// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.
//  Tests
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> Returns -3.
// minStack.pop();
// minStack.top();      --> Returns 0.
// minStack.getMin();   --> Returns -2.
const Stack = require("./Stack.js");

class MinStack {
    constructor() {
        this._storage = new Stack();
        this._minStack = new Stack();
    }

    push(x) {
        this._storage.push(x);
        if (this._minStack._count == 0 || x <= this._minStack.peek()) {
            this._minStack.push(x);
        }
    }

    pop() {
        let value = this._storage.pop();
        if (this._minStack.peek() == value) {
            this._minStack.pop();
        }
    }

    top() {
        return this._storage.peek();
    }

    getMin() {
        return this._minStack.peek();
    }
}



// TESTS
function test(label, body) {
    if (body) {
        return `Test Passes for ${label}`
    }
    else {
        return `Test failse for ${label}`;
    }
}



let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(test("getMin() should return -3", function () {
    return minStack.getMin() == -3
}));
minStack.pop();
console.log(test("top(); should return 0", function () {
    minStack.top() == 0;
}));
console.log(test("getMin() should return -2", function () {
    return minStack.getMin == -2;
}));

