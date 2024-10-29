"use strict";

//Inheritance between "Classes" using ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  //Instance methods - that will be added to prototype property
  calcAge() {
    console.log(2024 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2024 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not full name`);
  }

  get fullName() {
    return this._fullName;
  }

  //Adding Static method - all instances cannot have access this.
  static hey() {
    console.log("Hey there👋");
    console.log(this);
  }
}

//class student

// Inherting from the Parent
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //Always needs to happens first! Because the call to super() function(below mentioned), is responsible for creating 'this' keyword in this sub class or child class.

    super(fullName, birthYear); //Here we dont need to call with parent class name. just using super() is enough because we already inherited parent using the extends keyword.

    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  //Overiding the Parent class

  //This calcAge appears first in prototype chain when we call on student instance. So it overides the calcAge() from parent class method which comes after in prototype chain.

  calcAge() {
    console.log(
      `I am ${2024 - this.birthYear} years old. But i feel more like  ${
        2024 - this.birthYear + 10
      }`
    );
  }
}

const gowtham = new StudentCl("Gowtham Reddy", 2004, "computer science");

//Method in child class calling Student Instance
gowtham.introduce();

//Method in parent class calling on Student instance
gowtham.calcAge();

console.log(gowtham);
