function createWelcomeMessage(festivalName, attractionName) {
  // Write code here
  const reversedAttractionName = attractionName.split('').reverse().join('');
  return `Welcome to ${festivalName}! Visit our ${reversedAttractionName}!`;
}
