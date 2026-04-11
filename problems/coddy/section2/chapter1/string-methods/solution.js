function formatBlogTitle(title) {
  // Write your code here
  const trimmedTitle = title.trim();
  let words = trimmedTitle.split(' ');

  return words
    .map((word) => {
      let temp = '';
      for (let i = 0; i < word.length; i++) {
        i === 0 ? (temp += word[i].toUpperCase()) : (temp += word[i]);
      }
      if (word.toUpperCase() === 'JAVASCRIPT') {
        temp = 'JavaScript';
      }
      return temp;
    })
    .join(' ');
}
