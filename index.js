
const returnFirstTwoDrivers = function(drivers) {
    const [driver1, driver2] = drivers;
    return [driver1, driver2];
  };
  const returnLastTwoDrivers = function(drivers) {
    const lastIndex = drivers.length - 1;
    return [drivers[lastIndex - 1], drivers[lastIndex]];
  };
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  function createFareMultiplier(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  }
  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);
  const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const firstTwo = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
console.log(firstTwo); 

const lastTwo = selectDifferentDrivers(drivers, returnLastTwoDrivers);
console.log(lastTwo); 

const Drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const FirstTwo = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
console.log(firstTwo); 

  
  
  
  
  
  