function analyzeGardenSoil(soilSamples) {
  const averagePH =
    soilSamples.reduce((prev, curr) => prev + curr) / soilSamples.length;
  let acidicCount = 0;
  let alkalineCount = 0;
  soilSamples.forEach((sample) => {
    if (sample < 7) {
      acidicCount++;
    }
    if (sample > 7) {
      alkalineCount++;
    }
  });
  return [averagePH, acidicCount, alkalineCount];
}
