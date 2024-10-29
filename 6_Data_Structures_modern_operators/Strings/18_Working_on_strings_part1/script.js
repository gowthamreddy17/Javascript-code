"use strict";

const airline = "TAP Air Portugal";
const plane = "A320";

//To get a character at particular position or index
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);

//Can also get index value directly after string
console.log("B737"[0]);

//Length of string
console.log(airline.length);
console.log("B737".length);

//---- String Methods - some are quite similar to array methods

//To get position or index of a character
console.log(airline.indexOf("r")); // It gets first occurence position only
console.log(airline.lastIndexOf("r")); //It gets last occurence position

//We can check entire words to
console.log(airline.indexOf("Portugal")); // This is Case sensitive, if wrong String, -1 will be returned.

//-- These indexes are helpful when to extract part of string using slice method. Slice methods needs indexes as arguments.

//-- Slice Method
console.log(airline.slice(4));
console.log(airline.slice(4, 7));
//Here  slice() method  slices the string to extract a portion of that string, here  indexes are provided as an argument. The Output formed will be "Sub String" it is part of original string.
//Here in the second example we have two parameters which is start and end. It removes or slices before start index and after end index.Here the length of substring will be end-start (7-4=3 - Air)
//Slice() doesn't change original string. Also that is impossible to change string because it is primitive data type. Strings are Immutable.

//Using indexes dynamically
console.log(airline.slice(0, airline.indexOf(" "))); //Returns string until first space occurence
console.log(airline.slice(airline.lastIndexOf(" ")+1));//Returns string after last space occurence


//Negative arguments
console.log(airline.slice(-2)); // returns string from last     i.e, Here, slice(-2) means it starts extracting from the second-to-last character and goes until the end. So, in the case of "TAP Air Portugal", it would extract the last two characters, "al".
console.log(airline.slice(1,-1)); //In this case, slice(1, -1) means it starts at index 1 (the second character, "A") and goes up to, but not including, the last character. So, it extracts characters from index 1 to the second-to-last character. For "TAP Air Portugal", this results in "AP Air Portuga".


const checkMiddleSeat = function(seat){
  //B and E are middle seats
  const s=seat.slice(-1);
  if(s==='B'||s==='E') console.log('You got middle seat 😐');
  else console.log('you got lucky 😎');
}

checkMiddleSeat("11E");
checkMiddleSeat("28C");
checkMiddleSeat("1B");


//-- How methods work on strings?
//We know that strings are primitive data types and these are immutable. The methods are still available for strings because whenever we call a method on a string javascript will automatically behind the scenes convert that string primitive to string object with the same content. Then on that object where the methods are called. This is called boxing.
//-- Boxing - it basically takes our string and puts into a box (object).

console.log(new String('Gowtham'));
console.log( typeof new String('Gowtham'));
//Javascript calls string function to convert into string object. When the operation is done the object is converted back into a regular string primitive.

//All string methods returns primitives even if called string object.
console.log(typeof new String('Gowtham').slice(1));
//Result will be a string only