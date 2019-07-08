import  { min, isEven, countBs, countChar } from './chap3.js';

test("Positve even number 50", function(){
    const actualAnswer = isEven(50);
    expect(actualAnswer).toBe(true);
})