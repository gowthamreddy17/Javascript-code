"use strict";

//--- Getters and Setters

//Every object in javascript can have setter and getter properties.And we call these special properties as assessor properties. While the normal properties are called data  properties.

//getters and setters are basically functions tha t get and set a value. But they still look like regualr properties.

const account = {
  owner: "gowtham",
  movements: [200, 300, 530, 230],

  //getter
  get latest() {
    //This will be helpful when we need to read something as property but we still need to do calculations before.
    return this.movements.slice(-1).pop();
  },

  //setter
  set latest(mov) {
    //setter method has exactly only one parameter.
    this.movements.push(mov);
  },
};

console.log(account.latest); //reading latest as property not as function

//Not like a method we use it before account.latest(50). But we can simply set the value as shown below.
account.latest = 50;
console.log(account.movements);

//*** Classes also have getters and setters they work in exact same way.

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2024 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  //getter - it is just like any other regular method that we set on prototype.
  get age() {
    return 2024 - this.birthYear;
  }

  //Setters and getters are useful for data validation
  //Creating a setter that the property already exist (i.e, fullName). Then each time the constructor() is execucted by setting the property of full name the the below setter method also executed.
  //Add _ when we same property for setter. but it changes the original property too.. (i.e, _fullName)
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not full name`);
  }

  get fullName() {
    return this._fullName;
  }
}

const gowtham = new PersonCl("Gowtham Reddy", 2004);

gowtham.calcAge();
gowtham.greet();

console.log(gowtham.age);


const walter = new PersonCl('walte white', 1965)