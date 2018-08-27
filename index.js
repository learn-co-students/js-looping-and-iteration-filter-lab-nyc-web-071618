// Code your solution in this file


function findMatching(drivers,str){
    function stringsEqual(driver){
        return driver.toUpperCase() === str.toUpperCase();
    }
    return drivers.filter(stringsEqual);
}

function fuzzyMatch(drivers,substring){
    function stringStartsWith(driver){
        return driver.startsWith(substring)
    }
    return drivers.filter(stringStartsWith)
}

function matchName(drivers,name){
    function nameMatches(driver){
        return driver.name === name
    }
    return drivers.filter(nameMatches)
}