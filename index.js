// Code your solution in this file
function findMatching (drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  })
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(function(driverName){
    return driverName.slice(0, letters.length) === letters;
  })
}

function matchName(drivers, name){
  return drivers.filter(function(driver){
    return driver['name'] === name;
    // pass in string into [], same as driver.name
    // tried driver[name], didn't work why?
  })
}
