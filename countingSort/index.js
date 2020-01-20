const countingSort = (arr, k) => {
  let countArr = new Array(k + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    ++countArr[arr[i]];
  }

  let result = [];
  for (let i = 1; i <= k; i++) {
    countArr[i] = countArr[i] + countArr[i - 1];
  }
  for (let i = arr.length - 1; i >= 0; i--) {
    let count = --countArr[arr[i]];
    result[count] = arr[i];
  }
  return result;
};

console.log(countingSort([1, 7, 8, 4, 8, 9, 9, 9, 8, 8, 8, 3, 2, 5], 9));
// time complexity = (n + k)