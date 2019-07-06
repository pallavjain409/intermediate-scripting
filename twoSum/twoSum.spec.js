const twoSum = require("./twoSum.js");
test("test Array 1", function () {
    const actualAnswer = twoSum([2, 7, 11, 15], 9);
    expect(actualAnswer).toBe([1, 2])
});