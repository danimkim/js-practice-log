Create a function named `updateBikeInventory` that takes one argument, a JSON string `inventoryStr`.

Parse it into an object, where `inventoryStr` has a `bikes` array. Each bike has `brand`, `price`, and `quantity`.

If a bike's `quantity` is less than `3`, add or update a key `note` with the value `"Restock needed"` for that bike.

Return the updated object as a JSON string.

```js
// Test case
{"bikes":
	[
		{
			"brand": "Trek",
			"price": 999.99,
			"quantity": 2
		},
		{
			"brand": "Giant",
			"price": 799.99,
			"quantity": 5
		}
	]
}
```
