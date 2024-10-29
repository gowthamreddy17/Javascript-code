"use strict";
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}:You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}:You withdrawn ${Math.abs(movement)}`);
  }
}

console.log(`------ For EACH method -----`);
movements.forEach(function (movement, index, arr) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}:You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}:You withdrawn ${Math.abs(movement)}`);
  }
});

//0:function(200)
//1:function(450)
//2:function(400)
//.....

//forEach Passes the current element, index of element, the entire array that we are looping. (They will be passed same order mentioned here into callback function).
//forEach is a higher order function which requires a callback function as argument. forEach calls the callback function here.
//forEach method iterates over the array and in each iteration it executes call back function. And in each iteration it recives the current element of the array as an argument.

//When to use forEach and For of?

//The order of parameters in forEach are current element, index of element, entire array whereas in for of loop the first one is current element index and then current array element.

//In forEach loop that we cannot break the loop in middle.So continue and break statements will not work here. forEach loops entire array.
//when we really need to break loop then we can use for of loop.
//Any loop we can use that is our personal preference.



const numbers = [1, 2, 3, 4, 5];

//Printing elements
numbers.forEach(function (ele, ind, arr) {
  console.log(ele);
});

//Printing Index and element
numbers.forEach(function (ele, ind, arr) {
  console.log(`Index ${ind}: Element  ${ele}`);
});

//Double the array numbers and store it new array
const doubledNumbers = [];
numbers.forEach(function (ele, ind, arr) {
  doubledNumbers.push(ele * 2);
});
console.log(doubledNumbers);

//Sum of all array elements
let sum = 0;
numbers.forEach(function (ele, ind, arr) {
  sum += ele;
});
console.log("sum is:", sum);
