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



class MinStack {
    constructor() {
        this._storage = [];
        this._minStack = [];
    }

    push(x) {
        this._storage.push(x);
        if (this._minStack.length == 0 || x <= this._minStack[this._minStack.length - 1]) {
            this._minStack.push(x);
        }
    }

    pop() {
        let value = this._storage.pop();
        if (this._minStack[this._minStack.length - 1] == value) {
            this._minStack.pop();
        }
    }

    top() {
        return this._storage[this._storage.length - 1];
    }

    getMin() {
        return this._minStack[this._minStack.length - 1];
    }
}