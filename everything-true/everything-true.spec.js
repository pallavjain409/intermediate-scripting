var truthCheck = require("./everything-true.js");
test("everything true 1", function() {
  const actualAnswer = truthCheck([{
    "user": "Tinky-Winky",
    "sex": "male"
  }, {
    "user": "Dipsy",
    "sex": "male"
  }, {
    "user": "Laa-Laa",
    "sex": "female"
  }, {
    "user": "Po",
    "sex": "female"
  }], "sex");
  expect(actualAnswer).toBe(true);
});
test("everything true 2", function() {
  const actualAnswer = truthCheck([{
    "user": "Tinky-Winky",
    "sex": "male"
  }, {
    "user": "Dipsy"
  }, {
    "user": "Laa-Laa",
    "sex": "female"
  }, {
    "user": "Po",
    "sex": "female"
  }], "sex");
  expect(actualAnswer).toBe(false);
});
test("everything true 3", function() {
  const actualAnswer = truthCheck([{
    "user": "Tinky-Winky",
    "sex": "male",
    "age": 0
  }, {
    "user": "Dipsy",
    "sex": "male",
    "age": 3
  }, {
    "user": "Laa-Laa",
    "sex": "female",
    "age": 5
  }, {
    "user": "Po",
    "sex": "female",
    "age": 4
  }], "age");
  expect(actualAnswer).toBe(false);
});
test("verything true 4", function() {
  const actualAnswer = truthCheck([{
    "name": "Pete",
    "onBoat": true
  }, {
    "name": "Repeat",
    "onBoat": true
  }, {
    "name": "FastFoward",
    "onBoat": null
  }], "onBoat");
  expect(actualAnswer).toBe(false);
});
test("verything true 5", function() {
  const actualAnswer = truthCheck([{
    "name": "Pete",
    "onBoat": true
  }, {
    "name": "Repeat",
    "onBoat": true,
    "alias": "Repete"
  }, {
    "name": "FastFoward",
    "onBoat": true
  }], "onBoat");
  expect(actualAnswer).toBe(true);
});
test("verything true 6", function() {
  const actualAnswer = truthCheck([{
    "single": "yes"
  }], "single");
  expect(actualAnswer).toBe(true);
});
test("verything true 7", function() {
  const actualAnswer = truthCheck([{
    "single": ""
  }, {
    "single": "double"
  }], "single");
  expect(actualAnswer).toBe(false);
});
test("verything true 8", function() {
  const actualAnswer = truthCheck([{
    "single": "double"
  }, {
    "single": undefined
  }], "single");
  expect(actualAnswer).toBe(false);
});
test("verything true 9", function() {
  const actualAnswer = truthCheck([{
    "single": "double"
  }, {
    "single": NaN
  }], "single");
  expect(actualAnswer).toBe(false);
});
