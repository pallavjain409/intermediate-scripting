const maxSubArraySum = (arr, k) => {
    let smallest = Number.MAX_SAFE_INTEGER;
    let currSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (i < k) {
            currSum += arr[i];
        } else {
            smallest = Math.min(currSum, smallest)
            currSum += arr[i] - arr[i - k];

        }
    }
    smallest = Math.min(currSum, smallest)
    return smallest;
}

console.log(maxSubArraySum([3, 21, 2, 1, 1, 1], 3)) 