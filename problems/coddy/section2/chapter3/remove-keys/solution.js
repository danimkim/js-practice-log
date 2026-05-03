function filterObject(obj, keysToKeep) {
  return keysToKeep.reduce((acc, key) => {
    if (obj.hasOwnProperty(key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}
// Do not modify code outside the function
