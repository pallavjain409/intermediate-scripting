var bubbleSort = require("./bubbleSort.js")
test("Array1", function(){
    const actualAnswer = bubbleSort([32,54,2,53,22]);
    expect(actualAnswer).toBe([2,22,32,53,54]);
})
test("Array2", function(){
    const actualAnswer = bubbleSort([4,453,223,33,32,14,565,3]);
    expect(actualAnswer).toBe(3,4,14,32,33,223,453,565);
})