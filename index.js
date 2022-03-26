// Code your solution in this file! Codes come h

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(){

    const firstDrivers = drivers.slice(0, 2)
    return firstDrivers
}
returnFirstTwoDrivers()

const returnLastTwoDrivers = function(){
    const lastDrivers = drivers.slice(-2)
    console.log(lastDrivers)
    return lastDrivers
}
returnLastTwoDrivers()

const selectingDrivers = []
selectingDrivers[0] = returnFirstTwoDrivers
selectingDrivers[1] = returnLastTwoDrivers



function createFareMultiplier() {
    let multiplier = 0
    return function(num) {
      return multiplier = num**2
    }
  }
  let fareMultiplier = createFareMultiplier()
  console.log(typeof fareMultiplier)
  console.log(fareMultiplier(5))

function fareDoubler(num){ 
    return num * 2
  }
  
  console.log(typeof fareDoubler)
  console.log(fareDoubler(10))

  function fareTripler(num){ 
    return num * 3
  }
  
  console.log(typeof fareTripler)
  console.log(fareTripler(12))

  
function selectDifferentDrivers(driversArray, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(driversArray)
}

console.log(selectDifferentDrivers())

