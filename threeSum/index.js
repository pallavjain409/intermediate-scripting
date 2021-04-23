var threeSum = function(nums) {
  nums = nums.sort((a, b) => a - b);
  let result = [];

  for (let [index, number] of nums.entries()) {
    if (number > 0) {
      return result;
    }
    if (number === nums[index - 1]) {
      continue;
    }

    let start = index + 1;
    let end = nums.length - 1;
    while (start < end) {
      let sum = number + nums[start] + nums[end];
      if (sum === 0) {
        result.push([number, nums[start], nums[end]]);
        start++;
        end--;
        while (nums[start] === nums[start - 1] && start < end) {
          start++;
        }
        while (nums[end] === nums[end + 1] && start < end) {
          end--;
        }
      } else if (sum < 0) {
        start++;
      } else {
        end--;
      }
    }
  }
  return result;
};

console.log(threeSum([1, 2, 0, -1, -1, -4]));
