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

function estimateElongation(organisms) {
  let estimation = '';
  organisms.forEach(({ name, factor }) => {
    if (estimation) {
      estimation += '\n';
    }
    if (factor >= 0 && factor <= 0.2) {
      estimation += `Hmm, ${name} barely stretches.`;
    } else if (factor > 0.2 && factor <= 0.4) {
      estimation += `Oh, ${name} has some elasticity.`;
    } else if (factor > 0.4 && factor <= 0.6) {
      estimation += `Interesting! ${name} shows moderate stretchiness.`;
    } else if (factor > 0.6 && factor <= 0.8) {
      estimation += `Wow! ${name} is quite elastic!`;
    } else {
      estimation += `Incredible! ${name} has remarkable elongation properties!`;
    }
  });
  return estimation;
}
