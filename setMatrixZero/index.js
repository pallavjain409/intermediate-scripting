var setZeroes = function(matrix) {
  let columns = matrix[0].length;
  let rows = matrix.length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] === 0) {
        markRow(matrix, i);
        markColumn(matrix, j);
      }
    }
  }

  return setXToZeroes(matrix);
};
function setXToZeroes(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === "X") {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
}
function markRow(matrix, row) {
  matrix[row].forEach(
    (element, index) =>
      (matrix[row][index] = matrix[row][index] !== 0 ? "X" : 0)
  );
}

function markColumn(matrix, column) {
  matrix.forEach(
    (_, index) =>
      (matrix[index][column] = matrix[index][column] !== 0 ? "X" : 0)
  );
}
console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
  ])
);

//  [
//   [1,0,1],
//   [0,0,0],
//   [1,0,1]
// ]
