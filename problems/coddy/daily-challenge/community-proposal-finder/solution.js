const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

// Read the number of proposals
const n = parseInt(input[0]);

// Read all proposal names
const proposals = [];
for (let i = 1; i <= n; i++) {
  proposals.push(input[i]);
}

// Read the search query
const searchQuery = input[n + 1];

// TODO: Filter proposals that contain the search query (case-insensitive)
// Store them in their original order

// TODO: From the filtered proposals, find those that start with a vowel (A, E, I, O, U)
// Sort these alphabetically (case-insensitive)

// TODO: Output the results:
// 1. First, print all matching proposals (one per line)
// 2. Print a blank line
// 3. Print the vowel-starting proposals (sorted, one per line)
// 4. Print the count of vowel-starting proposals

// Your solution here
const vowels = ['a', 'e', 'i', 'o', 'u'];

const matchingProposals = proposals.filter((proposal) =>
  proposal.toLowerCase().includes(searchQuery.toLowerCase()),
);
const vowelStartProposals = matchingProposals
  .filter((proposal) => vowels.includes(proposal[0].toLowerCase()))
  .sort();
matchingProposals.forEach((proposal) => console.log(proposal));
console.log('');
vowelStartProposals.forEach((proposal) => console.log(proposal));
console.log(vowelStartProposals.length);
