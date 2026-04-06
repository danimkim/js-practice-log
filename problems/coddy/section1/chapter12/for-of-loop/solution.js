function countDigits(str) {
  let count = 0;
  for (const s of str) {
    if (s >= '0' && s <= '9') {
      count++;
    }
  }
  return count;
}
