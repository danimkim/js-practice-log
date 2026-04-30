function getElementsInRow(grid, rowIndex) {
  if (rowIndex < 0 || rowIndex >= grid.length) return [];
  return grid[rowIndex];
}
