var pairElement = require("./DNA-strand.js");
test("DNA pairing 1", function() {
  const actualAnswer = pairElement("ATCGA");
  expect(actualAnswer).toStrictEqual([
    ["A", "T"],
    ["T", "A"],
    ["C", "G"],
    ["G", "C"],
    ["A", "T"]
  ])
});
test("DNA pairing 2", function() {
  const actualAnswer = pairElement("TTGAG")
  expect(actualAnswer).toStrictEqual([
    ["T", "A"],
    ["T", "A"],
    ["G", "C"],
    ["A", "T"],
    ["G", "C"]
  ])
});
test("DNA pairing 3", function() {
  const actualAnswer = pairElement("CTCTA")
  expect(actualAnswer).toStrictEqual([
    ["C", "G"],
    ["T", "A"],
    ["C", "G"],
    ["T", "A"],
    ["A", "T"]
  ])
});
