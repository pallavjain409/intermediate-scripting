function getOrbitalPeriod(avgAlt) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let earthRadiusPlusAvgAltCube = Math.pow((earthRadius + avgAlt), 3);
  let c = Math.pow((earthRadiusPlusAvgAltCube / GM), 0.5);
  let orbitalPeriod = 2 * Math.PI * c;
  return Math.round(orbitalPeriod);
}

function orbitalPeriod(arr) {
  for (let obj of arr) {
    let avgAlt = obj.avgAlt;
    let orbitalPeriod = getOrbitalPeriod(avgAlt);
    delete obj.avgAlt;
    obj.orbitalPeriod = orbitalPeriod;
  }

  return arr;
}

module.exports = orbitalPeriod;
