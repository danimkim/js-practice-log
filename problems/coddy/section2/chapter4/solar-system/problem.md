Create a function named `analyzeSolarSystem` that takes one argument, a JSON string `solarSystemData`. The JSON string contains information about planets in our solar system. Each planet has the following properties:

- `name` (string)
- `type` (string: "rocky" or "gas")
- `numberOfMoons` (number)
- `discoveredIn` (number, year)
- `surfaceTemperature` (object with min and max in Celsius)
- `hasRings` (boolean)

Your task:

1. Parse the JSON string into an object.
2. For each planet:
   1. Add a property `classification` based on these rules:
      1. If it's a rocky planet and `surfaceTemperature.max` < 50°C: `Potentially Habitable`
      2. If it's a rocky planet and `surfaceTemperature.max` >= 50°C: `Extreme Environment`
      3. If it's a gas planet and `numberOfMoons` > 10: `Complex System`
      4. If it's a gas planet and `numberOfMoons` <= 10: `Simple Gas Giant`
   2. Add a property `ageOfDiscovery` that calculates how many years ago the planet was discovered (from the year `2010`)
   3. If the planet has rings and more than 5 moons, add a property `specialFeature` with value `Ring System with Rich Moon Population`
3. Return the modified object as a JSON string.

Example input:

```
{
  "planets": [
    {
      "name": "Mars",
      "type": "rocky",
      "numberOfMoons": 2,
      "discoveredIn": -3000,
      "surfaceTemperature": {
        "min": -140,
        "max": 20
      },
      "hasRings": false
    },
    {
      "name": "Saturn",
      "type": "gas",
      "numberOfMoons": 82,
      "discoveredIn": -3000,
      "surfaceTemperature": {
        "min": -178,
        "max": -138
      },
      "hasRings": true
    }
  ]
}
```
