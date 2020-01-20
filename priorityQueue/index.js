class Heap {
    constructor(compare) {
        this.heap = []
        if (compare) {
            this.compare = compare
        } else {
            this.compare = this.defaultComp
        }
    }

    add(val) {
        this.heap.push(val);
        this.heapifyUp();
        return this.heap.length
    }

    delete() {
        if (this.heap.length == 0) {
            return;
        }
        if (this.heap.length == 1) {
            return this.heap.pop();
        }
        let val = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown();
        return val;
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1
        while (currentIndex > 0) {
            let parentIndex = Math.floor((currentIndex - 1) / 2);
            if (this.compare(this.heap[parentIndex], this.heap[currentIndex])) {
                this.swap(currentIndex, parentIndex);
                currentIndex = parentIndex;
            } else {
                return;
            }

        }
    }

    heapifyDown(currentIndex = 0) {
        let leftIndex = 2 * currentIndex + 1;
        let rightIndex = 2 * currentIndex + 2;
        let largest = currentIndex;

        if (leftIndex <= this.heap.length - 1 && this.heap[leftIndex]) {
            if (this.compare(this.heap[largest], this.heap[leftIndex])) {
                largest = leftIndex;
            }
        }
        if (rightIndex <= this.heap.length - 1 && this.heap[rightIndex]) {
            if (this.compare(this.heap[largest], this.heap[rightIndex])) {
                largest = rightIndex;
            }
        }
        if (largest !== currentIndex) {
            this.swap(largest, currentIndex);
        }
        return;
    }

    search(val) {
        return this.heap.indexOf(val)
    }

    deleteVal(val) {
        let indexOfVal = this.search(val)
        if (indexOfVal == -1) {
            return "Value not present";
        }
        let deleteVal = this.heap[indexOfVal];
        this.heap[indexOfVal] = this.heap.pop();
        this.heapifyDown(indexOfVal);
        return deleteVal;
    }

    swap(i, j) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
        return
    }
    defaultComp(a, b) {
        return a < b;
    }
}

class PriorityQueue extends Heap {
    constructor() {
        function compare(a, b) {
            return this.priorities[a] < this.priorities[b]
        }
        super(compare);
        this.priorities = {}
    }

    addItem(item, priority = 0) {
        this.priorities[item] = priority;
        super.add(item)
    }

    remove(item) {
        super.deleteVal(item);
        delete this.priorities[item]
    }

    changePriority(item, priority) {
        this.remove(item);
        this.addItem(item, priority)
    }

    removeByPriority() {
        if (this.isEmpty()) {
            return null
        }
        let item = super.delete();
        delete this.priorities[item];
        return item;
    }

    isEmpty() {
        return Object.keys(this.priorities).length == 0;
    }
}