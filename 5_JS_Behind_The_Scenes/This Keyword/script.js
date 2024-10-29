"use strict";

// This keyword is dynamic value.It depends on how function is called.


// Global object (window object in browser)
console.log(this);
console.log(typeof(this));

// Function Declaration
const calcAge = function(birthYear){
  const age=2023-birthYear;
  console.log(this); //here in the function declaration of the this keyword is undefined in strict mode. But in a sloppy mode or no strict mode it refers to global window object.
  //  console.log(this.age); //Error because here 'this' is undefined so we cannot access age property of undefined function
}
calcAge(2004);


// Arrow Function
const calcAgeArrow = birthYear =>{
  const age=2023-birthYear;
  console.log(this);
   //here in arrow functions 'this' refers to global object because in arrow functions this keyword doesn't get its own this keyword, so it uses lexical this keyword(parent function or parent scope)
  //  console.log(this.age); //undefined
}
calcAgeArrow(2006);



// object methods
// here this keyword always points to the object that is calling the method.
const gowtham={
 birthYear:2004,
 calcAge:function(){
  console.log(this); //Here 'this' refers to the gowtham object.When we have a method call then the this keyword inside the method will be the object. That means in gowtham.calcAge();    calcAge() is the method inside the gowtham object. 
  console.log(2023-this.birthYear);
 }
}
gowtham.calcAge();//Here gowtham is the object calling calcAge method. so in 'this' keyword points to gowtham. so gowtham object is the owner of calcAge method.



const sai={
  birthYear:2005,
}

// function is just a value

sai.calcAge=gowtham.calcAge; //It is called "method borrowing". Here we are borrowed the method from one object to other. Just copying the method from one object to another object.
sai.calcAge(); //Here this keyword points to "sai" object. Here calcAge method called by "sai" object.


const f=gowtham.calcAge; //Here we are just copying whole function into a object.(function is nothing but a value).
// f();   //Error! cannot read property (year) of undefined.
// here this keyword becomes undefined because it becomes a regular function call. It is not attached to an object. There will be no owner of this "f" function.