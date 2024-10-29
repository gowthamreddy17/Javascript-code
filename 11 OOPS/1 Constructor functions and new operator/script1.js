"use strict";

const Person = function (firstName, birthYear) {
  //Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //Never do this
  //   this.calcAge = function(){
  //     console.log(2024 - this.birthYear)
  //   }
};

//-- Calling a constructor function

const gowtham = new Person("Gowtham", 2004);
console.log(gowtham);

//What happens when we call a function with new Operator ?

//1. A New Empty Object {} is created.
//2. Then function is called, 'this' keyword set to newly created Empty Object {}. this = {}
// 3. New Empty Object {} is linked to a prototype.
//4. function automatically return that created object {}. (At this point the object no longer needs to be empty)

const jonas = new Person("Joans", 1991);
console.log(jonas);

const jack = new Person("Jack", 1975);
console.log(jack);

console.log(gowtham instanceof Person);
