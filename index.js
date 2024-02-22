// Code your solution in this file!


const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = (driversArray) => {
    const firstTwoDrivers = [driversArray[0], driversArray[1]]
    return firstTwoDrivers
    //return driverArray.slice(0, 2)
}

//.slice(-2) ...-2 is last 2 (-1 is the last element)
// 0 represents the first element
const returnLastTwoDrivers = (driversArray) => {
    console.log(driversArray)
   return driversArray.slice(-2) //can use -2  (implies starting from very end (last two))

}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


//createFareMultiplier(4)(2) => 8
// const fareFunction = createFareMulitplier(4)
// fareFunction(2) => 8
const createFareMultiplier = (fareMultiplier) => {
    return (fare) => {
        return fare * fareMultiplier
    }
}

// const fareDoubler = (fare) => {
//     //return a function where the fareMultiplier is 2
//     const twoMulitplier = createFareMultiplier(2)
//     console.log(twoMulitplier)
//     return twoMulitplier(fare)  
// }


const fareDoubler = createFareMultiplier(2) //returns a functionw
//fareDoubler -> anonymous function with the #2 as fareMulitplier
//fareDoubler(3) -> 3 represents the fare

const fareTripler = createFareMultiplier(3)

// const selectDifferentDrivers = function(drivers, driverFunction) {
//     return driverFunction(drivers);
//   }

const selectDifferentDrivers = (drivers, driversFunction) => {
    console.log(driversFunction)
    return driversFunction(drivers)

}