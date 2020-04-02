function subset(nums) {
	let res = [];
	subsetImp(nums, res)
	return res;

	function subsetImp(nums, res, i = 0, curr = []){
		res.push(curr)
		for (; i < nums.length; i++){
			subsetImp(nums, res, i + 1, curr.concat(nums[i]))
		}
	}
}

console.log(subset([1,2,3]))