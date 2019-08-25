function countOnes(array) {
    if (array[array.length - 1] == 0) {
        return 0;
    }
    if (array[0] == 1) {
        return array.length;
    }

    return array.length - binarySearchOne(array);

}

function binarySearchOne(array) {
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
        let middle = Math.round((start + end) / 2);
        if (array[middle - 1] == 0 && array[middle] == 1) {
            return middle;
        }
        if (array[middle] == 0) {
            start = middle;
        } else if (array[middle] == 1) {
            end = middle;
        }


    }
}
console.log(countOnes([0, 0, 0, 1,1,1,1]));