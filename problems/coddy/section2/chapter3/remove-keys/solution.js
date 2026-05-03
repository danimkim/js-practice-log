function filterObject(obj, keysToKeep) {
  let newObj = {};

  // Write your code here
  for (let key of keysToKeep) {
    if (obj.hasOwnProperty(key)) {
      newObj = {
        ...newObj,
        [key]: obj[key],
      };
    }
  }

  return newObj;
}
// Do not modify code outside the function
