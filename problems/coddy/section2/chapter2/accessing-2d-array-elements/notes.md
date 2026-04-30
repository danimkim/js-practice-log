# Notes

## First attempt issues

**What I got wrong**

- Unnecessary use of filter: You iterate over the entire grid just to find one row.
- Indirect access: filter(...)[0] is less readable than direct indexing.
- No validation of grid structure (optional improvement depending on context).

## Final approach

- Core idea: Directly access the desired row using its index instead of iterating through the entire grid with filter.
- Key data structure / technique: Array indexing for O(1) access combined with a simple boundary check.
- Why this is better: Eliminates unnecessary iteration, improving performance from O(n) to O(1), and makes the code more concise, readable, and intention-revealing.

## Complexity

- Time: O()
- Space: O()

## Edge cases checklist

- [ ] Empty / minimal input
- [ ] Max constraints
- [ ] Duplicates / ties
- [ ] Negative values (if applicable)

## Takeaway

- Avoid unnecessary iteration, and use input validation and boundary checks whenever possible to write safer functions.
