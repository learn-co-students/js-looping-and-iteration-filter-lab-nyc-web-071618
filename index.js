// Code your solution in this file

function findMatching(drivers, name) {
  const answer = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  return answer;
}

 function fuzzyMatch(drivers, name) {
  const answer = drivers.filter(driver => driver.slice(0, 1) === name.slice(0, 1));
  return answer;
}

 function matchName(drivers, name) {
  const answer = drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
  return answer;
}
