const fs = require('fs');
const input = fs.readFileSync(0).toString().split('\n');

// Read the hex color code (table identifier)
const hexColor = input[0];

// Read the family member IDs (space-separated on second line)
const familyMembers = input[1].split(' ');

// TODO: Convert hex color code to decimal and print as table number
// Hint: Remove the '#' if present, then convert from base 16 to base 10
const sanitizedHex = hexColor.includes('#') ? hexColor.slice(1) : hexColor;

// TODO: Check if any family member IDs appear more than once
// Print "Duplicates found" or "No duplicates"
let compareArr = [];
familyMembers.forEach((id) => {
  if (!compareArr.includes(id)) compareArr.push(id);
});
const result =
  compareArr.length === familyMembers.length
    ? 'No duplicates'
    : 'Duplicates found';

// Output format:
// Line 1: Table number (decimal)
console.log(parseInt(sanitizedHex, 16));
// Line 2: "Duplicates found" or "No duplicates"
console.log(result);
