const bobTestHelper = str => {
  str = str.split(" ");
  let hash = { odd: [], even: [] };
  str.forEach((number, index) => {
    number % 2 == 0 ? hash.even.push(index + 1) : hash.odd.push(index + 1);
  });

  return hash.even.length == 1 ? hash.even[0] : hash.odd[0];
};

console.log(bobTestHelper("2 4 7 8 10")); // 3
console.log(bobTestHelper("1 2 1 1")); //2
