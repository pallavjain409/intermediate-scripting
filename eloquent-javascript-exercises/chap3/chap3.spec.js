
 const chapter3 = require("./chap3");
 const min = chapter3.min;
 test("23, 44", function(){
    const actualAnswer = min(23, 44);
    expect(actualAnswer).toBe(23);
});
test("-32, 1", function(){
    const actualAnswer = min(-32, 1);
    expect(actualAnswer).toBe(-32);
});
const isEven = chapter3.isEven;

test("Positve even number 50", function(){
    const actualAnswer = isEven(50);
    expect(actualAnswer).toBe(true);
});
test("Positve odd number 75", function(){
    const actualAnswer = isEven(75);
    expect(actualAnswer).toBe(false);
});
test("Negavtive even number -50", function(){
    const actualAnswer = isEven(-50);
    expect(actualAnswer).toBe(true);
});
test("Negative odd number -21", function(){
    const actualAnswer = isEven(-21);
    expect(actualAnswer).toBe(false);
});
const countBs = chapter3.countBs;
test("BBC", function(){
    const actualAnswer = countBs("BBC");
    expect(actualAnswer).toBe(2);
});

test("ACFD", function(){
    const actualAnswer = countBs("ACFD");
    expect(actualAnswer).toBe(0);
});

test("bbbb", function(){
    const actualAnswer = countBs("bbbb");
    expect(actualAnswer).toBe(0);
});
const countChar = chapter3.countChar;

test("kakakak, k", function(){
    const actualAnswer = countChar("kakakak", "k");
    expect(actualAnswer).toBe(4);
});
test("pallav, k", function(){
    const actualAnswer = countChar("pallav", "k");
    expect(actualAnswer).toBe(0);
});