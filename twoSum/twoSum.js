var twoSum = function (numbers, target) {
    if (numbers.length <= 1){
        return "Insufficient Array length";
    }
    let cache = {}
    for (let index = 0; index < numbers.length; index++) {
        let newTarget = target - numbers[index];
        if (cache.hasOwnProperty(newTarget)) {
           
            return [cache[newTarget] + 1, index + 1];
        }
        else {
            cache[numbers[index]] = index;
        }
    }
    return "No Sum";
}
module.exports = twoSum;