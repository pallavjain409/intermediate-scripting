function binarySearch(array, target) {
  let max = array.length - 1;
  let min = 0;
  while (max > min) {
    let guess = Math.floor((max + min) / 2)
    if (array[guess] == target) {
      return guess
    }
    if (array[guess] < target) {
      min++;
    }
    else {
      max--;
    }
  }
  return -1;
}
