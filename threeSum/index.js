var threeSum = function(nums){
    let map = new Map()
    for (let i = 0 ; i < nums.length; i++){
        for (let j = i + 1; j < nums.length ; j++){
            let sumOfTwo = nums[i] + nums[j]
            map.set(sumOfTwo, [nums[i], nums[j]])
        }
    }
    console.log(map)
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))