class Heap {
    constructor() {
        this.heap = []
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
        let currentIndex = this.heap.length - 1 //4
        while (currentIndex > 0) {
            let parentIndex = Math.floor((currentIndex - 1) / 2); //            
            if (this.heap[parentIndex] < this.heap[currentIndex]) {
                this.swap(currentIndex, parentIndex);
                currentIndex = parentIndex;
            } else {
                return;
            }

        }
    }

    heapifyDown() {
        let currentIndex = 0;
        let leftIndex = 2 * currentIndex + 1;
        let rightIndex = 2 * currentIndex + 2;
        let largest = currentIndex;

        if (leftIndex <= this.heap.length - 1 && this.heap[leftIndex]) {
            if (this.heap[leftIndex] > this.heap[largest]) {
                largest = leftIndex;
            }
        }
        if (rightIndex <= this.heap.length - 1 && this.heap[rightIndex]) {
            if (this.heap[rightIndex] > this.heap[largest]) {
                largest = rightIndex;
            }
        }
        if (largest !== currentIndex) {
            this.swap(largest, currentIndex);
        }
        return;
    }

    swap(i, j) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
        return
    }
} 