var convertHtml = require("./converting-Html-entities.js");
test("Converted to Html entites", function() {
  const actualAnswer = convertHtml("Dolce & Gabbana");
  expect(actualAnswer).toBe("Dolce &amp; Gabbana")
});
test("Converted to Html entites 2", function() {
  const actualAnswer = convertHtml("Sixty > twelve");
  expect(actualAnswer).toBe("Sixty &​gt; twelve")
});
test("Converted to Html entites 3", function() {
  const actualAnswer = convertHtml('Stuff in "quotation marks"');
  expect(actualAnswer).toBe("Stuff in &quot;quotation marks&​quot;")
});
test("Converted to Html entites 4", function() {
  const actualAnswer = convertHtml("Schindler's List");
  expect(actualAnswer).toBe("Schindler&​apos;s List")
});
