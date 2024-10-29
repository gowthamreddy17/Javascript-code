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

//-- Prototypes

// Every function in JavaScript, including constructor functions, has a property called 'prototype'.
// Any object created by a constructor function will have access to all methods and properties defined on the constructor’s prototype property.
// This means that all objects created through a constructor function will inherit these methods and properties.

// In the example given, this would be Person.prototype.
// By defining methods and properties on the prototype property of a constructor function, these methods and properties become accessible to all instances created by that constructor.
// Adding a method to the prototype property allows all objects created by the constructor to access that method.

//or

// Every JavaScript function, including constructor functions, has a prototype property.
// Objects created by a constructor function inherit methods and properties from its prototype.
// For instance, Person.prototype allows all objects created with Person to access its methods and properties.
// Adding methods to Person.prototype makes them accessible to all instances of Person.

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

//Each object created by the Person constructor function will get access to all the methods of the prototype property.
//Here only one copy of the calcAge function exist. (Not in every object exist). All of the objects that are created can reuse this function on themselves.

gowtham.calcAge(); //Here 'gowtham' object does not contain the calcAge method. But it is still acessed due to prototypal inheritance.
//Here 'this' keyword set to the object calling the method.
jonas.calcAge();

//Here the prototype of gowtham and jonas objects are Person.prototype . So they can access all methods and properties from that prototype.

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

// *** Here Person.prototype is not the prototype of the Person function itself. Instead, it serves as the prototype for all objects created with the Person constructor function. This distinction is subtle but important.

console.log(Person.prototype.isPrototypeOf(Person));

console.log(Person.prototype.isPrototypeOf(gowtham));
console.log(Person.prototype.isPrototypeOf(jonas));

//prototypesOfLinkedObjects assume this to understand.

// The `__proto__` property on the `jonas` object is created by the `new` operator. The `new` operator performs several steps, one of which is to link the new object to the constructor's prototype. This step creates the `__proto__` property on the object and sets its value to the prototype property of the constructor function. This linkage allows JavaScript to know that the `jonas` object is connected to `Person.prototype`.

console.log(gowtham); //Here in __proto__ which is Person.prototype will contain the calcAge() function.

//We can also set Properties on Prototype not just methods

Person.prototype.species = "Homo Sapiens";
console.log(gowtham.species, jonas.species);

//Here species will not be its own property. own properties that are directly declared on the object itself.

console.log(gowtham.hasOwnProperty("firstName"));
console.log(gowtham.hasOwnProperty("species")); // It is inherited from prototype Property of Person. so it is not its own property.

//------------------------------------------------------------------------------------------------------------------------------------------

//-- Prototypal Inheritance on Built in objects

//Prototype chain

console.log(gowtham.__proto__);
//Object.prototype (it is top of prototype chain)
console.log(gowtham.__proto__.__proto__);
console.log(gowtham.__proto__.__proto__.__proto__);

// constructor property will point back to the Person (Person Protoype function)
console.dir(Person.prototype.constructor);

//--- Arrays - arrays are also objects they have prototypes too..
const arr = [1, 3, 3, 4, 7, 3]; // new Array === []
console.log(arr.__proto__);
//Here each array inherit these methods into its prototype. Here the methods are not copied to arr they are simply inherited.
//All the methods in arrays  live in the prototype property of Array constructor
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

// Adding our own method to the Array constructor (It works in this present code only :)
//Just experiment not for real world situations

Array.prototype.unique = function () {
  return [...new Set(this)]; //'this' Points to that array on which the method is called. ex: arr.unique() then this -> arr
};

console.log(arr.unique());

//extending a inbuilt prototype with our own method is not a good idea. But it is ideal for small projects.

//There are several reasons not use this adding our own method to protype:
//-- in newer versions they might release the  method with the same name we created. Then our code will probably break because then it uses new method which works differently.
//--When we work on team of developers this is not a good idea. Because multiple developers implemement the same method with different name that will raise bugs in code.

//--- Dom Elements - behind scenes they are also objects
const p = document.querySelector("p");
console.dir(p);

//Functions - functions also objects even they have prototypes will then contain methods.
console.dir(x=>x+1)