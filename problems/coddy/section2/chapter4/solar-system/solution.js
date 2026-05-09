function analyzeSolarSystem(solarSystemData) {
  // Write code here
  const BASE_YEAR = 2010;
  const parsedData = JSON.parse(solarSystemData);

  parsedData.planets = parsedData.planets.map((planet) => {
    const { type, surfaceTemperature, numberOfMoons, discoveredIn, hasRings } =
      planet;
    const newPlanet = { ...planet };

    if (type === 'rocky') {
      newPlanet.classification =
        surfaceTemperature.max < 50
          ? 'Potentially Habitable'
          : 'Extreme Environment';
    } else if (type === 'gas') {
      newPlanet.classification =
        numberOfMoons > 10 ? 'Complex System' : 'Simple Gas Giant';
    }

    newPlanet.ageOfDiscovery = BASE_YEAR - discoveredIn;

    if (hasRings && numberOfMoons > 5) {
      newPlanet.specialFeature = 'Ring System with Rich Moon Population';
    }
    return newPlanet;
  });

  return JSON.stringify(parsedData);
}
// Don't write anything outside the function
