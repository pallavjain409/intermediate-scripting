var flipAndInvertImage = function(A) {
  return A.map(arr => flipRow(arr).map(input => invert(input)));
};

function flipRow(arr) {
  let A = [];
  while (arr.length) {
    A.push(arr.pop());
  }
  return A;
}

function invert(input) {
  return input == 0 ? 1 : 0;
}
