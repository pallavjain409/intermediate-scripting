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


// another solution move zeroes

var moveZeroes = function(nums) {
    let count = 0
   nums.forEach((_, index)=> {
       if (nums[index] !== 0){
           nums[count] = nums[index]
           count++
       } })
      for (let i = count; i < nums.length; i ++){
          nums[i] = 0
      }

   return nums

};