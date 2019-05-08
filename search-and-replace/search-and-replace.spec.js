var myReplace = require("./search-and-replace.js");
test("search and replace 1", function(){
  const actualAnswer = myReplace("Let us go to the store", "store", "mall");
  expect(actualAnswer).toBe("Let us go to the mall");
})
test("search and replace 2", function(){
  const actualAnswer = myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
  expect(actualAnswer).toBe("He is Sitting on the couch");
});
test("search and replace 3", function(){
  const actualAnswer = myReplace("His name is Tom", "Tom", "john");
  expect(actualAnswer).toBe("His name is John");
});
test("search and replace 4", function(){
  const actualAnswer = myReplace("Let us get back to more Coding", "Coding", "algorithms");
  expect(actualAnswer).toBe("Let us get back to more Algorithms");
});
