/*Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study. 

Your tasks: 
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order: 
1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4 
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old) 
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages) 
4. Run the function for both test datasets

Test data: 
§ Data 1: [5, 2, 4, 1, 15, 8, 3] 
§ Data 2: [16, 6, 10, 5, 6, 1, 4] 

GOOD LUCK 
*/

"use strict";

const calcAverageHumanAge = function (ages) {
  const humanAge = ages.map(function (dogAge) {
    if (dogAge <= 2) return 2 * dogAge;
    else return 16 + dogAge * 4;
  });
  console.log(humanAge);

  const dogs18Y = humanAge.filter(function (years) {
    return years >= 18;
  });
  console.log(dogs18Y);

  const average = dogs18Y.reduce(function (acc, mov, i, arr) {
    return (acc += mov / arr.length);
  }, 0);
  console.log(average);
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// Arrow functions
console.log("---- With Arrow functions ----");
const calcAverageHumanAge1 = function (ages) {
  const humanAges = ages.map((dogAge) =>
    dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4
  );
  console.log(humanAges);

  const dogs18Y = humanAges.filter((years) => years >= 18);
  console.log(dogs18Y);

//   const average = dogs18Y.reduce((acc,mov,i,arr)=>acc+=mov,0)/dogs18Y.length;
  const average = dogs18Y.reduce((acc,mov,i,arr)=>acc+=mov/arr.length,0);
  console.log(average);
};
calcAverageHumanAge1([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge1([16, 6, 10, 5, 6, 1, 4]);
