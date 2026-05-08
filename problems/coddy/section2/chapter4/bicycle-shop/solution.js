function updateBikeInventory(inventoryStr) {
  // Write code here
  const inventory = JSON.parse(inventoryStr);
  inventory.bikes = inventory.bikes.map((bike) => {
    if (bike.quantity < 3) {
      return {
        ...bike,
        note: 'Restock needed',
      };
    }
    return bike;
  });
  return JSON.stringify(inventory);
}
// Don't write anything outside the function
