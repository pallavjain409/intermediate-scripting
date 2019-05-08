var sumPrimes = require("./prime-numbers.js");
test("prime number 1", function(){
  const actualAnswer = sumPrimes(10);
  expect(actualAnswer).toBe(17);
});
test("prime number 2", function(){
  const actualAnswer = sumPrimes(977);
  expect(actualAnswer).toBe(73156);
});
