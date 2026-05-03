# Notes

## First attempt issues

[First attempt code(e923a1e7)](https://github.com/danimkim/js-practice-log/blob/e923a1e793d54d25da6021e116e2b291973db3c9/problems/coddy/section2/chapter3/remove-keys/solution.js)

### Optimization issue

- Recreating the entire object on every iteration using the spread operator. Less efficient

```js
newObj = {
  ...newObj,
  [key]: obj[key],
};
```

## Final approach

- Core idea:
- Key data structure / technique:
- Why this is better:

## Complexity

- Time: O()
- Space: O()

## Edge cases checklist

- [ ] Empty / minimal input
- [ ] Max constraints
- [ ] Duplicates / ties
- [ ] Negative values (if applicable)

## Takeaway

- One reusable lesson from this problem:
