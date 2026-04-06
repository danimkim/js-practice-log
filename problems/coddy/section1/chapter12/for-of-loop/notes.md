# Notes

## First attempt issues

- Used `parseInt` with `isNaN` to check for digits: this approach checks whether a value can be converted to a number rather than strictly verifying if it is a digit (0–9), which makes the intent less precise

## Final approach

- `s >= '0' && s <= '9'` directly compares character ranges, making the intent clearer and avoiding unnecessary type conversion

## Complexity

- Time: O()
- Space: O()

## Takeaways

- For better general code robustness, it’s important to avoid relying on implicit type conversion (`parseInt()`) and instead use more explicit and predictable checks
- The key distinction is not whether a value can be converted to a number, but whether it is strictly a single digit character (0–9)
- In JavaScript, string comparison is based on Unicode (ASCII) values, which is why range checks like `'0'` to `'9'` work correctly
- `NaN` is not equal to itself (`NaN !== NaN`), so it cannot be reliably checked with direct comparison; use `Number.isNaN()` for accurate detection
