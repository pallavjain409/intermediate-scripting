/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode.com/problems/single-element-in-a-sorted-array/submissions/
var singleNonDuplicate = function(nums) {
    //   [3,3,7,7,10,11,11]
    let start = 0; // 4
    let end = nums.length; // 6
 
    if (end === start){
        return nums[end];
    }
    if (nums[start] !== nums[start + 1]){
        return nums[start]
    }
    if (nums[end] === nums[end - 1]){
        return nums[end]
    }
    while(start <= end){
        let middle = Math.floor((start + end) / 2); //3
        if ((nums[middle] !== nums[middle - 1]) && (nums[middle] !== nums[middle + 1]))          {
          return nums[middle];  
        }
        else if ((middle % 2 === 0 && nums[middle] === nums[middle + 1]) || 
                (middle % 2 === 1 && nums[middle] === nums[middle - 1])
                ){
            start = middle + 1
        }
        else {
            end = middle - 1;
        }
    }
    return -1; 
};
