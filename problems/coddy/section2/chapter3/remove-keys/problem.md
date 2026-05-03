Create a function named `filterObject` that:

1. Takes an object and an array of keys to keep
2. Returns a new object containing only the specified keys from the original object
3. Important: Do not modify the original object

For example:

```
// Original object
const person = {
  name: "John",
  age: 30,
  city: "New York",
  job: "Developer"
};

// Call your function
const filtered = filterObject(person, ["name", "job"]);

// Result should be:
// { name: "John", job: "Developer" }

// The original object should remain unchanged
console.log(person); // Still has all original properties
```

If a key in the "keep list" doesn't exist in the original object, just ignore it.
