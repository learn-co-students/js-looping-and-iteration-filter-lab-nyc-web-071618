// Code your solution in this file
// const result = words.filter(word => word.length > 6);
function findMatching(drivers, name) {
  const result = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  return result;
}

function fuzzyMatch(drivers, name) {
  const result = drivers.filter(driver => driver.slice(0, 1) === name.slice(0, 1));
  return result;
}

function matchName(drivers, name) {
  const result = drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  return result;
}
