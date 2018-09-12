// Code your solution in this file
function findMatching(drivers, name) {
  const newArr = drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())

  return newArr
}

function fuzzyMatch(drivers, str){
  newArr = drivers.filter(driver => driver.slice(0, str.length).toLowerCase() === str.toLowerCase())
  return newArr
}

function matchName(drivers, str){
  newArr = drivers.filter(driver => driver.name.toLowerCase() === str.toLowerCase())
  return newArr
}
