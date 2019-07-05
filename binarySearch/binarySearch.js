function binarySearch(array, target) {
  let end = array.length - 1;
  let start = 0;
  while (start <= end) {
    let middile = Math.floor((start + end) / 2)
    if (array[middle] == target) {
      return middle
    }
    if (array[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}
