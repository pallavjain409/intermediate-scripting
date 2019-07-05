var mergeSort = require("./mergeSort.js")
test("Array 1", function(){
    const actualAnswer = mergeSort([23,12,2,43,1]);
    expect(actualAnswer).toBe([1,2,12,23,43])
});
test("Array 2", function(){
    const actualAnswer = mergeSort([11,32,24,232,554,22,12,4]);
    expect(actualAnswer).toBe([4,11,12,22,24,32,232,554])
});