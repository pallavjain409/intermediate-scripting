var maxSubArray = function(nums) {
  let maximum = nums[0];
  let prev = nums[0];
  for (let i = 1; i < nums.length; i++) {
    prev = Math.max(nums[i], nums[i] + prev);
    maximum = Math.max(maximum, prev);
  }

  return maximum;
};

// Input: [-2,1,-3,4,-1,2,1,-5,4],
//[-2, -1,]
//
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
