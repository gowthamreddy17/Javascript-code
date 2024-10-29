"use strict";

// Object.create() - to manually set the prototype of object to any other object we want, without help of constructor and new method.

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
//Here the steven will be linked to the prototype of personProto or what we pass in Object.craete()

console.log(steven); //Here it contains the calcAge as prototype from personProto object.

steven.name = "Steven";
steven.birthYear = 2002;
steven.calcAge();
console.log(steven);

console.log(steven.__proto__);
console.log(steven.__proto__ == PersonProto);

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1979);
sarah.calcAge();