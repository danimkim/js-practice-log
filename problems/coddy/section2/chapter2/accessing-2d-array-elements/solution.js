function getElementsInRow(grid, rowIndex) {
  // add input validation and boundary check
  if (!Array.isArray(grid) || rowIndex < 0 || rowIndex >= grid.length) {
    return [];
  }
  return Array.isArray(grid[rowIndex]) ? grid[rowIndex] : [];
}
