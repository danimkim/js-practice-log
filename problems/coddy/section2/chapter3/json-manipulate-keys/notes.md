# Notes

## First attempt issues

[first attempt code (b7aeeebe)](b7aeeebe4a68a37c7ee59a99d7b22b65d02fc0f7)

### What I got wrong

- Used `forEach` with a `return` inside it to validate required fields, assuming it would exit the main function.
- Misspelled `adoptionStatus` as `adoptionsStatus`
- Checking the number of fields (`newDataKeys.length !== 6`) instead of properly verifying that all required fields are present.

### Why it failed

- The `return` inside `forEach` only exits the callback, not the outer `petShelterManager` function, so validation never actually stops execution. As a result, `newData` is always added even when required fields are missing.
- The typo causes the validation to check for a non-existent field
- Checking the number of fields is unreliable. It can reject valid data with extra fields and accept invalid data that happens to have the correct number of fields, making the validation logically incorrect.

### Failing case:

```js
petShelterManager([], {
  id: '1',
  name: 'Buddy',
  type: 'dog',
  age: 3,
  isVaccinated: true,
  // missing "adoptionStatus"
});
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
