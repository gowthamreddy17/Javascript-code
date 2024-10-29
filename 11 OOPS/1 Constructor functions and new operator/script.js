"use strict";

//--- Constructor functions

//In OOP we oftenly  creating objects Programatically

//we can use constructor functions, to build an object using a function. Now, a constructor function is actually a completely normal function.
//The only difference between a regular function, a function that we call constructor function, is that we call a constructor function with the new operator.
//Arrow function will not work as a function constructor. That is because it doesn't have its own 'this' keyword.

const Person = function (firstName, birthYear) {
  //For constructor function the first letter must be capital

  //   console.log(this); // Here this = {}

  //Instance Properties - The Object properties that are created here will be available to all the instances that are created.
  this.firstName = firstName; //Here object property may be any name this.Name but we use this.firstName because that is a convention that object property name must be same with parameter.
  this.birthYear = birthYear;

  //   console.log(this); // Here this = newly created object with properties

  //Never create a method inside a constructor function. Because suppose when we create a hundred or thousand or even more objects with this constructor function then each of these objects will carry that function (that becomes thosands of copies of number of objects we created (thousand objects suppose)). That will definitely affect on performance.
  //**** Instead we use Prototypes and prototypal inheritance to avoid the above disadvantage.
  //But the below code will work, but a bad practice.
  //   this.calcAge = function(){
  //     console.log(2024 - this.birthYear)
  //   }
};

//The Object automatically returned by constructor function.

//-- Calling a constructor function

const gowtham = new Person("Gowtham", 2004);
console.log(gowtham);

//What happens when we call a function with new Operator ?

//1. A New Empty Object {} is created.
//2. Then function is called, 'this' keyword set to newly created Empty Object {}. this = {}
// 3. New Empty Object {} is linked to a prototype.
//4. function automatically return that created object {}. (At this point the object no longer needs to be empty)

//--------------------------------------
//We can use the above constructor function to create as many objects we want. (same like from a single class create many instances or from a single  blue print many houses are built)

const jonas = new Person("Joans", 1991);
console.log(jonas);

const jack = new Person("Jack", 1975);
console.log(jack);

// In classical object oriented programming, an object created from a class is called an instance, right? Now we didn't technically create a class here.
//JavaScript doesn't really have classes in the sense of traditional OOP. However, we did create an object from a constructor function.
// since the beginning of JavaScript to kind of simulate classes. But the objects created are instances of constructor function.

console.log(gowtham instanceof Person);


// note that function constructors are not really a feature of the JavaScript language. Instead, they are simply a pattern that has been developed by other developers. And now everyone simply uses this.
