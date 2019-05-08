var orbitalPeriod = require("./map-the-debris");
test("orbital period 1", function() {
  const actualAnswer = orbitalPeriod([{
    name: "sputnik",
    avgAlt: 35873.5553
  }]);
  expect(actualAnswer).toStrictEqual([{
    name: "sputnik",
    orbitalPeriod: 86400
  }]);
});
test("orbital period 2", function() {
  const actualAnswer = orbitalPeriod([{
    name: "iss",
    avgAlt: 413.6
  }, {
    name: "hubble",
    avgAlt: 556.7
  }, {
    name: "moon",
    avgAlt: 378632.553
  }]);
  expect(actualAnswer).toStrictEqual([{
    name: "iss",
    orbitalPeriod: 5557
  }, {
    name: "hubble",
    orbitalPeriod: 5734
  }, {
    name: "moon",
    orbitalPeriod: 2377399
  }])
});
