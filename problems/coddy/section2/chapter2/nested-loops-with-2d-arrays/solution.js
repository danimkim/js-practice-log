function findMaxInRows(matrix) {
  let maxValues = [];
  matrix.forEach((row) => {
    maxValues.push(Math.max(...row));
  });

  return maxValues;
}
