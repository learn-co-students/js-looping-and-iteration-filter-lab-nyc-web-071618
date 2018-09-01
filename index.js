// Code your solution in this file
// function findMatching(collection, name) {
//   let newColl = []
//   for (const item of collection) {
//     if (item.toLowerCase() === name.toLowerCase()) {
//       newColl.push(item)
//     }
//   }
//   return newColl
// }

function findMatching(list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

// function fuzzyMatch(collection, name) {
//   let newColl = []
//   for (item of collection) {
//     if (item[0] === name[0]) {
//       newColl.push(item)
//     }
//   }
//   return newColl
// }

function fuzzyMatch(list, name) {
  return list.filter(function (driverName) {
    return driverName[0] === name[0];
  });
}

// function matchName(drivers, string) {
//   let newColl = []
//   for (object of drivers) {
//     if (object.name === string) {
//       newColl.push(object)
//     }
//   }
//   return newColl
// }
function matchName(drivers, string) {
  return drivers.filter(function (object) {
    return object.name.toLowerCase() === string.toLowerCase();
  });
}
