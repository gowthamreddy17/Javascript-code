"use strict";

// -------------------------------------------------

//--- Static Methods. - All Instances cannot have access to a static method created.Because the static methods does not exist on prototypes of objects. they can be called on that constructor only.

console.log(Array.from(document.querySelectorAll("h1")));
//Here the Array.from() method cannot be called on arrays we created it could be called only on the Array constructor only. It is only attached to Array constructor but not be used as a prototype.

//Another static method
Number.parseInt("12");
//This can be called only on Number constructor but not directly on numbers.

//Adding static method to constructor function

//-------------------------------------

//constructor function
const Person = function (firstName, birthYear) {
  //Instance Properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const gowthamReddy = new Person("Gowtham", 2004);
console.log(gowthamReddy);


//Static method in constructors
Person.hey = function () {
  console.log("Hey there👋");
  console.log(this);
};

Person.hey();
// gowthamReddy.hey() // this wont work. The function is not on a prototype  of gowthamReddy object. because it is a static method. All Instances cannot have access to a static method created.

//---------------------

//class - adding static method

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

const gowtham = new PersonCl("Gowtham Reddy", 2004);

// gowtham.calcAge();
// gowtham.greet();

// console.log(gowtham.age);

PersonCl.hey()