function petShelterManager(shelterData, newData) {
  // Write code here
  const KEYS = ['id', 'name', 'type', 'age', 'isVaccinated', 'adoptionStatus'];

  // check if all fields exist
  for (let key of KEYS) {
    if (!newData.hasOwnProperty(key)) {
      return shelterData;
    }
  }

  shelterData.push(newData);
  return shelterData;
}
// Do not write anything outside function
