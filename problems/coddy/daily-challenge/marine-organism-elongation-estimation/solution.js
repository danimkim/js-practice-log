/** Create a function named estimateElongation that receives organisms as its parameter.

The function simulates a marine biologist vocally estimating the elongative properties of various marine organisms in a research laboratory.

Your task is to process the input data and generate a string that represents the scientist's vocal estimations for each organism.

Parameters:

organisms (array): An array of objects, where each object represents a marine organism. Each object has two properties:
name (string): The name of the marine organism.
factor (number): The elongation factor of the organism, a number between 0 and 1, where 0 represents no elongation and 1 represents maximum elongation.
The function should return a string where each line represents a vocal estimation for an organism, based on its elongation factor:

0.0 to 0.2: "Hmm, [organism] barely stretches."
0.2 to 0.4: "Oh, [organism] has some elasticity."
0.4 to 0.6: "Interesting! [organism] shows moderate stretchiness."
0.6 to 0.8: "Wow! [organism] is quite elastic!"
0.8 to 1.0: "Incredible! [organism] has remarkable elongation properties!"
Each estimation should be on a new line in the returned string.
 */

const rules = [
  [0.2, (name) => `Hmm, ${name} barely stretches.`],
  [0.4, (name) => `Oh, ${name} has some elasticity.`],
  [0.6, (name) => `Interesting! ${name} shows moderate stretchiness.`],
  [0.8, (name) => `Wow! ${name} is quite elastic!`],
  [1.0, (name) => `Incredible! ${name} has remarkable elongation properties!`],
];

function estimateElongation(organisms) {
  return organisms
    .map(({ name, factor }) => {
      return rules.find(([limit]) => factor <= limit)[1](name);
    })
    .join('\n');
}
