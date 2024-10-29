"use strict";

// -- function decalaration --   supports hoisting
function calcAge1(birthYear) {
  return 2023 - birthYear;
}
const age1 = calcAge1(2004);
console.log(age1);
// console.log(calcAge1(2004));

// -- function expression -- or -- anonnymous function          not supports hoisting
const calcAge2 = function (birthYear) {
  //here we are storing a function(function without name) directly in a variable.
  return 2023 - birthYear;
}; //this whole function is like expression(returns a single value) which store value in that variable
const age2 = calcAge2(2004);
console.log(age2);

//functions are values but function is not a type(not number, boolean, string).
