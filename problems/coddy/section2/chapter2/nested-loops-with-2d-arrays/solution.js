function findMaxInRows(matrix) {
  // add a guard clause for empty arrays
  return matrix.map((row) => (row.length ? Math.max(...row) : null));
}
