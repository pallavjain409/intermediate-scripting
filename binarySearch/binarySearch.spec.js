var binarySearch = require("./binarySearch.js");
test("search", function() {
  const actualAnswer = binarySearch([2,4,6,7,9,54],9);
  expect(actualAnswer).toBe(4)
});
