function filterObject(obj, keysToKeep) {
  let newObj = {};

  for (let key of keysToKeep) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}
// Do not modify code outside the function
