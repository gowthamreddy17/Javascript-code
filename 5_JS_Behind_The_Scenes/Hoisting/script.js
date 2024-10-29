"use strict";

// Using variables
// Before Declaration

console.log(firstName); //Undefined with var before declaration.
// console.log(job); //Throws error (reference Error). That means it is a temporal dead zone for this job variable (More written in notes...)
// console.log(birthYear); //Throws error (reference Error). That means it is a temporal dead zone for this job variable (More written in notes...)

var firstName = "gowtham";
let job = "student";
const birthYear = 2004;
// After Declaration
console.log(firstName);
console.log(job);
console.log(birthYear);

// with Functions

console.log(addDecl(5, 3));
// console.log(addExpress(5,3));  //Reference error we cannot use function expression before initialisation. This works as like variables we declare with like var, const/let. (temporal dead zone)
// console.log(addArrowFunc(5,3));  //Type error we cannot use arrow function before initialisation. This works as like variables we declare with like var, const/let. (temporal dead zone). here the function becomes undefined(2,3) so that is not a function.

function addDecl(a, b) {
  return a + b;
}

const addExpress = function (a, b) {
  return a + b;
};

var addArrowFunc = (a, b) => a + b;

console.log(addDecl(6, 3));
console.log(addExpress(6, 3));
console.log(addArrowFunc(6, 3));

// Example - using 'var' leads to serious bugs

console.log(numProducts); // here numproducts value is undefined because of var ( in hoisting var is undefined before initialisation)
//This condition checks (numProducts == 0) then only deleteShoppingCart() function executed. here the reason the function executed is undefined is falsy value.
//here numProducts is false (that means 0) because of undefined value. The inverese of that is true(that means 1). so the if statement is executed here. (even numProducts have the value 10 at below not considered here because of undefined value with var).
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All items re deleted");
}

// another example var creates a seperate property in window object (global object) in browser

var x = 10;
let y = 10;
const z = 10;

console.log(window);
console.log(x === window.x); //True because var creates a seperate property of x variable in window global object in browser (it makes some problems at some time).
console.log(window.x);
console.log(y === window.y);
console.log(z === window.z);
