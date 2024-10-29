"use strict";

//expressionFunc(); // Throws an error (TypeError)
var expressionFunc = function() {
  console.log("I am a function expression.");
};
expressionFunc(); 

//expressionLetFunc(); // Throws an error (ReferenceError)
let expressionLetFunc = function() {
  console.log("I am a let function expression.");
};
expressionLetFunc();

//expressionConstFunc(); // Throws an error (ReferenceError)
const expressionConstFunc = function() {
  console.log("I am a const function expression.");
};
expressionConstFunc();


arrowFunc(); // Throws an error (TypeError)
var arrowFunc = () => {
  console.log("I am an arrow function.");
};
arrowFunc();

//arrowLetFunc(); // Throws an error (ReferenceError)
let arrowLetFunc = () => {
  console.log("I am a let arrow function.");
};
arrowLetFunc();

//arrowConstFunc(); // Throws an error (ReferenceError)
const arrowConstFunc = () => {
  console.log("I am a const arrow function.");
};
arrowConstFunc();