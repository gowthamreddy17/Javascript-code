// 1. **Prototypal Inheritance with Constructor Functions:**
//    - Prototypal inheritance was implemented using constructor functions.
//    - Methods were manually set on the constructor function's prototype property.

// 2. **Introduction to ES6 Classes:**
//    - ES6 classes provide a modern syntax for achieving the same functionality.
//    - Classes in JavaScript are syntactic sugar over prototypal inheritance, not like traditional classes in languages like Java or C++.

// 3. **Benefits of ES6 Classes:**
//    - They implement prototypal inheritance behind the scenes.
//    - The syntax is more intuitive for developers from other programming languages.

// 4. **Class Declaration and Expression:**
//    - Class declaration: `class PersonCl {}`.
//    - Class expression: `const PersonCl = class {}`.
//    - Both can be used based on preference.

"use strict";

//-- ES6 Classes

//Class Expression
// const PersonCl = class {}

//Class Declaration
class PersonCl {
  constructor(firstName, birthYear) {
    //constructor() is a method of this class. But it works same as constructor functions. the name should be like constructor() only.

    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  //-- Adding Methods - here Methods will be added to the .prototype property
  calcAge() {
    console.log(2024 - this.birthYear);
  } //these functions are on prototyoe of objects. But not on object themseleves.

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const gowtham = new PersonCl("Gowtham", 2004);
//when we create a new instance here, then constructor() is  called and that will return a new object and then that will be stored here into gowtham.
console.log(gowtham);
gowtham.calcAge();

console.log(gowtham.__proto__ === PersonCl.prototype);

//We can use this way too for adding methods
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };

gowtham.greet();

//** A Class really hides the nature of prototypal inheritance in javascript.

//***Important Points about classes

/*
 1.Classes are not hoisted:

Unlike function declarations, classes (even class declarations) cannot be used before they are declared in the code.

2.Classes are first-class citizens:

Classes can be passed into functions and returned from functions, as they are essentially special kind of functions.

3. Classes are executed in strict mode:

The body of a class is always executed in strict mode, regardless of whether strict mode is activated for the entire script. */

//-----------------------------------------

// Which one to use ?

/*
Major Differences Between Classes and Constructor Functions

1. **Syntax:**
   - **Classes:** Cleaner and more modern.
   - **Constructor Functions:** Older and less organized.

2. **Hoisting:**
   - **Classes:** Not hoisted.
   - **Constructor Functions:** Hoisted.

3. **Strict Mode:**
   - **Classes:** Always executed in strict mode.
   - **Constructor Functions:** Not automatically in strict mode.

4. **First-Class Citizens:**
   - Both classes and constructor functions can be passed into and returned from functions.

### Which One to Use

- **Constructor Functions:** 
  - Not deprecated and still 100% fine to use.
  - Useful if you prefer the traditional function-based approach.
  
- **Classes:** 
  - Preferred if you want cleaner, more organized code.
  - Better if you come from other OOP languages and want familiar syntax.
  - Recommended as long as you understand prototypal inheritance.
*/


