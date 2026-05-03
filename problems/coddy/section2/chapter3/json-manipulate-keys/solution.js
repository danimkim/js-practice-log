function petShelterManager(shelterData, newData) {
  // Write code here
  const KEYS = ['id', 'name', 'type', 'age', 'isVaccinated', 'adoptionStatus'];

  // check if all fields exist
  const isValid = REQUIRED_KEYS.every((key) => key in newData);

  if (!isValid) return shelterData;

  return [...shelterData, newData]; // maintain immutability
}
// Do not write anything outside function
