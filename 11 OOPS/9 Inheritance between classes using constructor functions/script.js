"use strict";

//Inheritance between "Classes" using constructor functions

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;

  //using Person constructor

  Person.call(this, firstName, birthYear); //Here we used call() to call the function and to point 'this' keyword manaully to empty object {} created by student by calling with new operator.
  this.course = course;
};

//Linking Prototypes

Student.prototype = Object.create(Person.prototype); //object.create() will return empty object and on to that empty object we create new instance below.
//But Here all the methods inherited from parent,  still  it is empty object. After this Object.create() only we can add other methods to Student (i.e, introduce) because if we create methods (introduce()) before Object.create() will overwrite it.

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const gowtham = new Student("Gowtham", 2004, "Computer Science");
console.log(gowtham);

gowtham.introduce();

//inherited method from Person - prototype chain
gowtham.calcAge();

console.log(gowtham);
console.log(gowtham.__proto__);
console.log(gowtham.__proto__.__proto__);

console.log(gowtham instanceof Student);
console.log(gowtham instanceof Person);//this also true because we linked prototypes together
console.log(gowtham instanceof Object);

console.dir(Student.prototype.constructor); //Here it need to point back to Student but for some reason it points back to Person.
//reason for the above case is we set the student prototype Property is set to Person using object.create()

//Pointing back to student
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
