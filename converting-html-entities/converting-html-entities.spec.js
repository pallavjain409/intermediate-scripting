var convertHTML = require("./converting-html-entities.js");
test("Converted to HTML entites", function() {
  const actualAnswer = convertHTML("Dolce & Gabbana");
  expect(actualAnswer).toBe("Dolce &amp; Gabbana")
});
test("Converted to HTML entites 2", function() {
  const actualAnswer = convertHTML("Sixty > twelve");
  expect(actualAnswer).toBe("Sixty &​gt; twelve")
});
test("Converted to HTML entites 3", function() {
  const actualAnswer = convertHTML('Stuff in "quotation marks"');
  expect(actualAnswer).toBe("Stuff in &quot;quotation marks&​quot;")
});
test("Converted to HTML entites 4", function() {
  const actualAnswer = convertHTML("Schindler's List");
  expect(actualAnswer).toBe("Schindler&​apos;s List")
});
