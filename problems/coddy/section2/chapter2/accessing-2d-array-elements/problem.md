Create a function named `getElementsInRow` that takes two arguments:

- A 2D array called `grid`
- An integer `rowIndex`

The function should return an array containing all elements in the specified row. If the rowIndex is out of bounds (negative or greater than or equal to the number of rows), return an empty array.

Example Input:

```
const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const rowIndex = 1;
```

Expected Output:

```
[4, 5, 6]
```
