var uniqueOccurrences = arr => {
    let cache = {};
    for (let number of arr) {
        cache[number] = (cache[number] || 0) + 1;
    }
    let cacheValues = Object.values(cache);
    return new Set(cacheValues).size == cacheValues.length
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])) // true
console.log(uniqueOccurrences([1, 2])) // false 