function updateBikeInventory(inventoryStr) {
  // Write code here
  const parsedObj = JSON.parse(inventoryStr);
  parsedObj.bikes = parsedObj.bikes.map((bike) => {
    if (bike.quantity < 3) {
      let newObj = JSON.parse(JSON.stringify(bike));
      newObj.note = 'Restock needed';
      return newObj;
    }
    return bike;
  });
  return JSON.stringify(parsedObj);
}
// Don't write anything outside the function
