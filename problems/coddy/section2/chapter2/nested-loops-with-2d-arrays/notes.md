# Notes

## First attempt issues

- What I got wrong:
- Why it failed:
- Failing case:

## Final approach

- Core idea: Use `map` to transform each row of the matrix into its maximum value.
- Key data structure / technique: Array `map` method combined with `Math.max(...row)` for finding row-wise maximums.
- Why this is better: It provides a more declarative and readable solution, avoids manual array mutation (like `push`), and clearly expresses the transformation from input rows to output values in a single step.

## Complexity

- Time: O()
- Space: O()

## Edge cases checklist

- [ ] Empty / minimal input
- [ ] Max constraints
- [ ] Duplicates / ties
- [ ] Negative values (if applicable)

## Takeaway

- One reusable lesson from this problem: `map` makes array transformations cleaner, more readable, and side-effect free.
