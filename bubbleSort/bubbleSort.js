
function bubbleSort(array) {
    var swapped;
    if (array.length <= 1) {
        return array;
    }
    do {
        outerCount++;
        swapped = false;
        for (let count = 0; count < array.length; count++) {
            innerCount++
            if (array[count] > array[count + 1]) {
                array = swapArrayItem(array, count, count + 1);
                swapped = true;
            }
        }
    }
    while (swapped);
    console.log(`innerCount: ${innerCount} outerCount: ${outerCount} swapCount ${swapCount}`)
    return array;
}
function swapArrayItem(array, index1, index2) {
    let temp;
    swapCount++;
    temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
}
module.exports = bubbleSort
