"use strict";

// var firstName = 'sai'; //if we create a variable with var it create this as a property in window object.
const gowtham={
  firstName:"sai",
  birthYear:2004,
  calcAge:function(){
   console.log(this); //Here 'this' refers to the gowtham object.When we have a method call then the this keyword inside the method will be the object. That means in gowtham.calcAge();    calcAge() is the method inside the gowtham object. 
   console.log(2023-this.birthYear);


  //  Solution 1 for undefined value of a method inside a function
  //  const self=this;
  //  const isMillineal=function(){
  //   console.log(self);
  //   console.log(self.birthYear>=1981&& self.birthYear<=1996);
  //   // console.log(this.birthYear>=1981&& this.birthYear<=1996);
  //  };
  //  isMillineal();
  // },

  //  Solution 2 after es6 using arrow function for the method undefined inside a function.
  // Here the arrow function does not its own this keyword so it takes reference or inherits from parent scope(lexical this) i.e, calcAge() function. 
  const isMillineal=()=>{
   console.log(this);
   console.log(this.birthYear>=1981&& this.birthYear<=1996);
  };
  isMillineal();
 },


  greet:()=>{
     console.log(this);
    console.log(`Hey ${this.firstName}`);//undefined because arrow function does not have their own this keyword. so it takes parent scope that is window object.
  },

 };
 gowtham.calcAge();
 gowtham.greet();
 console.log(this.firstName); //here it is window object. firstName is not present there. So it is undefined.

// So never use arrow function as a method for some cases. use normal function expression.



// Arguments Keyword
const addExpr=function(a,b){
  console.log(arguments);
  return a+b;
}
addExpr(2,5);
// addExpr(2,5,8,9);  //We can pass multiple parameters as arguments but it is illegal to use. we can use a loop over that array.

var addArrow = (a,b)=>{
  // console.log(arguments);  //Error! we cannot use arguments keyword inside arrow functions
  return a+b;
}
addArrow(2,5);
