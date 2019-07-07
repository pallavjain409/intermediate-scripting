function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    return merge(sortedLeft, sortedRight);
}
function merge(left, right) {
    let leftIndex = 0;
    let rightIndex = 0;
    let result = [];
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++;
        }
        else {
            result.push(right[rightIndex]);
            rightIndex++
        }

    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
module.exports = mergeSort