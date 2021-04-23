var sortDutchFlag = (nums) => {
    function swap(i, j) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
        return
    }

    let left = 0;
    let right = nums.length - 1;
    let i = 0;
    while (i <= right) {
        if (nums[i] == 0) {
            swap(i, left)
            left++;
            i++
        } else if (nums[i] == 2) {
            swap(i, right)
            right--;
        } else {
            i++
        }
    }
    return nums
}

//[0,1,0,1,1,2]
console.log(sortDutchFlag([1, 0, 1, 0, 0, 2]))