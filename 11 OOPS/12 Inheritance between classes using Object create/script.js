"use strict";

//Inheritance between "Classes" using Object.create()

const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

//Creating student
const StudentProto = Object.create(PersonProto); //Here it is {} - Student Proto Intially here

//adding a existing method to StudentProto for overriding it

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init("Jay", 2003, "Computer Science");
jay.introduce()
jay.calcAge()