function analyzeSolarSystem(solarSystemData) {
  // Write code here
  const BASE_YEAR = 2010;
  const parsedData = JSON.parse(solarSystemData);
  const { planets } = parsedData;

  const newPlanets = planets.map((planet) => {
    const { type, surfaceTemperature, numberOfMoons, discoveredIn, hasRings } =
      planet;
    let newPlanet = { ...planet };

    if (type === 'rocky') {
      newPlanet = {
        ...newPlanet,
        classification:
          surfaceTemperature.max < 50
            ? 'Potentially Habitable'
            : 'Extreme Environment',
      };
    }
    if (type === 'gas') {
      newPlanet = {
        ...newPlanet,
        classification:
          numberOfMoons > 10 ? 'Complex System' : 'Simple Gas Giant',
      };
    }

    newPlanet = {
      ...newPlanet,
      ageOfDiscovery: BASE_YEAR - discoveredIn,
    };

    if (hasRings && numberOfMoons > 5) {
      newPlanet = {
        ...newPlanet,
        specialFeature: 'Ring System with Rich Moon Population',
      };
    }
    return newPlanet;
  });

  const updatedPlanets = {
    planets: newPlanets,
  };

  return JSON.stringify(updatedPlanets);
}
// Don't write anything outside the function
