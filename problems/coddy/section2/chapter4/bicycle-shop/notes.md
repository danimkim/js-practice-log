# Notes

## First attempt issues

Used `JSON.stringify()` and `JSON.parse()` to copy each bike object, which is unnecessarily heavy for this problem

## Final approach

### Key data structure / technique

Use `map()` to create an updated bikes array and object spread syntax to return a new bike object with the note property added or updated.

### Why this is better

This avoids using `JSON.stringify()` and `JSON.parse()` for object copying. Object spread is simpler, more readable, and more appropriate when only a shallow copy with one updated property is needed.

## Complexity

- Time: O(n)
- Space: O(n)

## Edge cases checklist

- [ ] Empty / minimal input
- [ ] Max constraints
- [ ] Duplicates / ties
- [ ] Negative values (if applicable)

## Takeaway

- One reusable lesson from this problem: Use map() with object spread when you need to create an updated array of objects without mutating the original data.
