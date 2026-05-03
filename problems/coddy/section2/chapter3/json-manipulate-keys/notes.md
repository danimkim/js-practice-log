# Notes

## First attempt issues

- What I got wrong: I used forEach with a return inside it to validate required fields, assuming it would exit the main function. I also misspelled `adoptionStatus` as `adoptionsStatus`.
- Why it failed: The `return` inside `forEach` only exits the callback, not the outer `petShelterManager` function, so validation never actually stops execution. As a result, `newData` is always added even when required fields are missing. Additionally, the typo causes the validation to check for a non-existent field.
- Failing case:

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
