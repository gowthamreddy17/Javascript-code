"use strict";

const oneWord = function (str) {
  return str.replaceAll(" ", "").toLowerCase();
  //return str.replace(/ /g, "").toLowerCase(); //Using regular expression to replace spaces with empty string (nothing).
};

//Here oneWord() is a normal function which accepts a string(str) then returns string by replaceing all occurences of spaces with empty string.After that converting that to lower case.

const UpperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");

  return [first.toUpperCase(), ...others].join(" ");
};

//Here UpperFirstWord() is a normal function which accepts a string(str) after that it splits the string according to spaces and stores in an array. Then destructures the array and stores the first word in 'first' variable. Then rest of all words stored in ...others using rest operator.

//Higher - Order Function
const transformer = function (str, fn) {
  console.log(`Original String is: ${str}`);
  console.log(`Transformed String is: ${fn(str)}`);
  console.log(`Transformed By: ${fn.name}`);
};

transformer("Javascript is the best!", UpperFirstWord); //Here UpperFirstWord is a callback function here.
transformer("Javascript is the best!", oneWord);

//Here transformer() is a High order function which accepts a string(str) and a function (fn). Then we are printing the original string in the first console. Then in second console we are calling another function i.e, fn which is a parameter that accepts function, and that will be a callback function - fn(str) (Which is called by the higher order function later) .In the third console we are getting the name of the function (by function methods) which is passed inside that transformer() function.
//Call back functions - Here we do not call the function ourselves. But we tell to javascript to call them later by an higher order function.

const high5 = function () {
  console.log("👋");
};

document.body.addEventListener('click', high5);

//Here addEventListener() is a higher order function. high5 is a call back function it is called by the higher order function when click event happens on body.The call back function in this case is event handler or event listener.


//forEach() - Array Method
['jonas','martha','adam'].forEach(high5);

//Here each of the name in the array the callback is called. Here high5 is callback function.


//Call back functions makes that is easy to split up or code into more reusable and interconnected parts.
//Call back functions allows us to create 'Abstraction' - Where we hide the details of some code implementation. This allows to think about problems at a higher more abstract level.

//Ex: Here in tranformer function we can implement all the logic of 'oneWord' and 'upperFirstWord' function. But instead we abstracted the logic code away into other functions. so again we created a new level of abstraction here.

//Here transformer() function is an higher order function which operates at higher level of abstraction and where it leaves the low level details to the low level functions. (oneWord,upperFirstWord)