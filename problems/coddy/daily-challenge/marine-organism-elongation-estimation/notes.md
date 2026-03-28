# Notes

## First attempt issues

- Incorrect handling of boundary values (e.g., 0.2, 0.4), leading to misclassification
- Used `<` instead of `<=`, which excluded expected edge cases
- Boundary value (0.2) is misclassified due to incorrect range conditions

## Final approach

- Review and update this note when revisiting.

## Complexity

- Time: O()
- Space: O()

## Takeaway

## Takeaways

- Boundary values must be handled carefully to avoid misclassification between ranges
- Problem statements like "between A and B" can be ambiguous and should not be trusted blindly
- Always verify assumptions using test cases, especially for edge/boundary values (e.g., 0.2, 0.4)
- Using `<=` in sequential conditions helps simplify logic and prevents boundary errors
- Prefer using `map` and `join` over manual string concatenation for cleaner and more maintainable code
