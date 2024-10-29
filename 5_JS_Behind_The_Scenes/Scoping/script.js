"use strict";

function calcAge(birthYear) {
  const age = 2023 - birthYear;
  console.log(firstName);

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    // here firstName is in Global scope right after the calcAge() called so it can access through parent function. age variable also defined from parent scope. Here birthYear parameter in scoping works like a variable, so this variable also defined from parent function
    console.log(output);
    if (birthYear > 2000 && birthYear < 2012) {
      var postMillineal = true;

      // Creating New variable with same name as outer scope's or global variable
      const firstName = "gowtham";
      //  Reassigning outer scope variable
      output = "New Output !";

      const str = `Oh, you are a post-Millineal, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);  //Str cannot be accesed here because declaring with const is block scoped
    console.log(postMillineal); //postMillineal can be acessed here because var is function scoped not block scoped
    // console.log(add(2,5)); //Here add function becomes block scoped in strict mode(after Es6). in case no strict mode it will work.
    console.log(output);
  }
  printAge(); //here the printAge() called inside the parent function i.e, calcAge() so it can acess all variables which are in the calcAge() scope. if we call printAge() inside printAge() function code it doedn't have access to calcAge() varaibles. and global variable firstName

  return age;
}

const firstName = "sai"; //Here the firstName is in Global scope even after created after the function code. so it can acess in above function because function code will not work until it is called in code
calcAge(2004); //A function really executes its code when it is called. Here function is called after the firstName variable declaration. so firstName can be accessibe in the function.

// console.log(age);  //Error! Age is not defined. because it is declared in calcAge() function scope. so age cannot be accesed here.
//printAge();         //Error! printAge is not defined. because it is declared in calcAge() function scope. so printAge cannot be  called here or accesed here.
