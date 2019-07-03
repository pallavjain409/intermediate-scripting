function binarySearch(array, target) {
  let end = array.length - 1;
  let start = 0;
  while (start <= end) {
    let guess = Math.floor((start + end) / 2)
    if (array[guess] == target) {
      return guess
    }
    if (array[guess] < target) {
      start = guess + 1;
    } else {
      end = guess - 1;
    }
  }
  return -1;
}
