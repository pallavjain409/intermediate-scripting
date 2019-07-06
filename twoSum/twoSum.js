var twoSum = function (numbers, target) {
    let result = [];
    let cache = {}
    for (let index = 0; index < numbers.length; index++) {
        let newTarget = target - numbers[index];
        if (cache.hasOwnProperty(newTarget)) {
            result.push(cache[newTarget] + 1);
            result.push(index + 1);
            return result;
        }
        else {
            cache[numbers[index]] = index;
        }
    }
    return "No Sum";
}
module.exports = twoSum;