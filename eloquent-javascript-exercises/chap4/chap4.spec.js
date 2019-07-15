const testFunctions = require('./chap4.js');
const range = testFunctions.range;
test("range from 1-10", function(){
    const actualAnswer = range(1, 10);
    expect(actualAnswer).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
})
test("range from 5-2", function(){
    const actualAnswer = range(5, 2, -1);
    expect(actualAnswer).toStrictEqual([ 5, 4, 3, 2]);
})

const sum = testFunctions.sum;
test("sum of numbers range from 1-10", function(){
    const actualAnswer = sum(range(1, 10));
    expect(actualAnswer).toBe(55);
});
 const reverseArray = testFunctions.reverseArray;
 test("[1, 2, 3, 4]", function(){
    const actualAnswer = reverseArray([1, 2, 3, 4]);
    expect(actualAnswer).toStrictEqual([4, 3, 2, 1]);
})

 test("['A', 'B', 'C']", function(){
    const actualAnswer = reverseArray(["A", "B", "C"]);
    expect(actualAnswer).toStrictEqual(["C", "B", "A"]);
})

// const  reverseArrayInPlace = testFunctions. reverseArrayInPlace;
// test("[1, 2, 3, 4]", function(){
//     const actualAnswer =  reverseArrayInPlace([1, 2, 3, 4]);
//     expect(actualAnswer).toStrictEqual([4, 3, 2, 1]);
// })

//  test("['A', 'B', 'C']", function(){
//     const actualAnswer = reverseArrayInPlace(["A", "B", "C"]);
//     expect(actualAnswer).toStrictEqual(["C", "B", "A"]);
// })