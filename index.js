// Code your solution in this file
function findMatching(driverArray, name) {
  const matches = [];
  for (element of driverArray) {
    if(element.toLowerCase() === name.toLowerCase()) {
      matches.push(element);
    }
  }
  return matches;
}

function fuzzyMatch(driverArray, letters) {
  const fuzzyMatches = [];
  for (element of driverArray) {
    if (element.slice(0, letters.length).toLowerCase() === letters.toLowerCase()) {
      fuzzyMatches.push(element);
    }
  }
  return fuzzyMatches;
}

function matchName(driverArray, name) {
  const nameMatches = [];
  for (object of driverArray) {
    if (object.name.toLowerCase() === name.toLowerCase()) {
      nameMatches.push(object);
    }
  }
  return nameMatches;
}
