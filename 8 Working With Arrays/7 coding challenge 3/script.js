/*Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time as an arrow function, and using chaining! 


Test data: 
§ Data 1: [5, 2, 4, 1, 15, 8, 3] 
§ Data 2: [16, 6, 10, 5, 6, 1, 4] 

GOOD LUCK 
*/

const calcAverageHumanAge = (ages) =>
  ages
    .map((dogAge) => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter((years) => years >= 18)
    .reduce((acc, mov, i, arr) => acc + mov / arr.length, 0);

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));



// const calcAverageHumanAge = function (ages) {
//   const humanAge = ages.map(function (dogAge) {
//     if (dogAge <= 2) return 2 * dogAge;
//     else return 16 + dogAge * 4;
//   });
//   console.log(humanAge);

//   const dogs18Y = humanAge.filter(function (years) {
//     return years >= 18;
//   });
//   console.log(dogs18Y);

//   const average = dogs18Y.reduce(function (acc, mov, i, arr) {
//     return (acc += mov / arr.length);
//   }, 0);
//   console.log(average);
// };
