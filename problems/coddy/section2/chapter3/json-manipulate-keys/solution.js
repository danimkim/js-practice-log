function petShelterManager(shelterData, newData) {
  // Write code here
  const KEYS = ['id', 'name', 'type', 'age', 'isVaccinated', 'adoptionsStatus'];

  // verification
  // num of field -> 6 / check matchin field name

  const newDataKeys = Object.keys(newData);

  // check matching field names
  KEYS.forEach((key) => {
    if (!newData.hasOwnProperty(key)) {
      return shelterData;
    }
  });

  // check number of field
  if (newDataKeys.length !== 6) return shelterData;

  shelterData.push(newData);
  return shelterData;
}
// Do not write anything outside function
