function MinHeap() {
  this.data = [];
}

MinHeap.prototype.insert = function(val) {
  this.data.push(val);
  this.bubbleUp(this.data.length-1);
};

MinHeap.prototype.bubbleUp = function(index) {
  while (index > 0) {
    // get the parent
    var parent = Math.floor((index + 1) / 2) - 1;
    
    // if parent is greater than child
    if (this.data[parent] > this.data[index]) {
      // swap
      var temp = this.data[parent];
      this.data[parent] = this.data[index];
      this.data[index] = temp;
    }
    
    index = parent;
  }
};

MinHeap.prototype.remove = function(){
	if (!this.data.length){
		return null
	}
	let min;
	if (this.data.length > 1){
		min = this.data[0]
		this.data[0] = this.data.pop()
	    this.bubbleDown(0)
	}
	else {
		return this.data.pop()
	}

	
	return min
}

MinHeap.prototype.bubbleDown = function(index){
	let nextIndex;
	let left = (2 * index) + 1
	let right = (2 * index ) + 2
	if (this.data[left] < this.data[index] && this.data[right] < this.data[index]){
		nextIndex = this.data[left] < this.data[right] ? left : right
	}
	else if (this.data[left] < this.data[index]){
		nextIndex = left
	}
	else if (this.data[right] < this.data[index]){
		nextIndex = right
	}

	if (nextIndex != undefined){
		[this.data[nextIndex], this.data[index]] =[this.data[index], this.data[nextIndex]]
		this.bubbleDown(nextIndex)
	}

}


MinHeap.prototype.sort = function(){
	let sorted = [];
	while(this.data.length){
		let removed = this.remove()
		sorted.push(removed)
	}
	return sorted
}
//[23,2123,23121212] index = 2, parent = 0
let min = new MinHeap()
min.insert(23)
min.insert(2123)
min.insert(23121212)
min.insert(123)
min.insert(212123)
// console.log(min.remove())
// console.log(min.remove())
// console.log(min.remove())
// console.log(min.remove())
// console.log(min.remove())
console.log(min.sort())
console.log(min.remove())