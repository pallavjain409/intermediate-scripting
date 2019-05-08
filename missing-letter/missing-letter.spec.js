var fearNotLetter = require("./missing-letter.js");
test("missing letter 1", function(){
  const actualAnswer = fearNotLetter("abce");
  expect(actualAnswer).toBe("d");
});
test("missing letter 2", function(){
  const actualAnswer = fearNotLetter("stvwx");
  expect(actualAnswer).toBe("u");
});
test("missing letter 3", function(){
  const actualAnswer = fearNotLetter("bcdf");
  expect(actualAnswer).toBe("e");
});
test("missing letter 4", function(){
  const actualAnswer = fearNotLetter("abcdefghijklmnopqrstuvwxyz");
  expect(actualAnswer).toBe(undefined);
});
