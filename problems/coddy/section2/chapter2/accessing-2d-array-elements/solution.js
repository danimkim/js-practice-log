function getElementsInRow(grid, rowIndex) {
  if (rowIndex < 0 || rowIndex >= grid.length) return [];

  return grid.filter((row, idx) => rowIndex === idx)[0];
}
// Do not write anything outside the function
