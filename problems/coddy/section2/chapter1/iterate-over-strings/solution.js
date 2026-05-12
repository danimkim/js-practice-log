function reverseVowels(str) {
  // Write your code here
  // hello
  // str[1], e / str[4] o
  // str[1], o / str[4] e
  // find vowels and their index
  // create an array with vowels. reverse the order
  // Using for loop, put those vowels in the index
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let position = [];
  let existingVowels = [];
  let temp = '';
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      existingVowels.push(str[i]);
      position.push(i);
    }
  }
  const reversedExistingVowels = existingVowels.reverse();
  let existingVowelsIndex = 0;
  for (let i = 0; i < str.length; i++) {
    if (position.includes(i)) {
      temp += reversedExistingVowels[existingVowelsIndex];
      existingVowelsIndex++;
    } else {
      temp += str[i];
    }
  }
  return temp;
}
