var binarySearchOfOne = (arr) => {
    let start = 0;
    let end = arr.length - 1
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (arr[middle] == 1 && arr[middle - 1] == 0) {
            return middle;
        } else if (arr[middle] == 0) {
            start = middle + 1;
        } else if (arr[middle] == 1) {
            end = middle - 1;
        }
    }
    return -1
}


var countNoOfOneInSortedArr = arr => {
    let arrLength = arr.length;
    if (arr[0] == 1) {
        return arrLength;
    }
    if (arr[arrLength - 1] == 0) {
        return 0;
    }
    let startingIndexOfOne = binarySearchOfOne(arr);
    let countOfOne = arrLength - startingIndexOfOne;
    return countOfOne;
}


var getRowWithMaxOne = (arr) => {
    var noOfOneInEachRow = {};
    arr.forEach((row, index) => {
         let oneCount = countNoOfOneInSortedArr(row);
         if (oneCount > 0){
             noOfOneInEachRow[index] = oneCount;
         }
    })
    if (Object.keys(noOfOneInEachRow).length == 0){
        return -1;
    }
    let maxOneCountRow = Object.keys(noOfOneInEachRow)[0];
    for (let row in noOfOneInEachRow) {
        if (noOfOneInEachRow[maxOneCountRow] < noOfOneInEachRow[row]) {
            maxOneCountRow = row;
        }
    }
    return parseInt(maxOneCountRow);
}

module.exports = getRowWithMaxOne;
