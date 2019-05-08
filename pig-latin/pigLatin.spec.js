var translatePigLatin = require("./pigLatin.js");
test("translate to pig latin 1", function() {
  const actualAnswer = translatePigLatin("california");
  expect(actualAnswer).toBe("aliforniacay")
});
test("translate to pig latin 2", function() {
  const actualAnswer = translatePigLatin("paragraphs");
  expect(actualAnswer).toBe("aragraphspay")
});
test("translate to pig latin 3", function() {
  const actualAnswer = translatePigLatin("glove");
  expect(actualAnswer).toBe("oveglay")
});
test("translate to pig latin 4", function() {
  const actualAnswer = translatePigLatin("eight");
  expect(actualAnswer).toBe("eightway")
});
