var moveZeroes = function (nums) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] === 0) {
            let j = i + 1;
            while (j < nums.length) {
                if (nums[j] !== 0) {
                    nums[i] = nums[j];
                    nums[j] = 0
                    break;
                }
                j++
            }
        }
        i++;
    }
    return nums;
};