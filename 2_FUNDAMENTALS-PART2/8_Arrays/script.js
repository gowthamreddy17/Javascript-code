"use strict";

const friend1 = "michael";
const friend2 = "steven";
const friend3 ="peter";
// Arrays can hold multiple values of different datatypes in a single variable.
//**  */ we can change array values when we declared to a const key word also. because array is not primitive datatype **

// Array is infact an object


// Array with literals syntax
const friends=["michael","steven","peter"];
console.log(friends);

// creating arrays direcly ( by new keyword)
const years = new Array(2004, 2003, 2002,2001,2000);
console.log(years);

console.log(friends[0]);
console.log(friends[1]);

console.log(friends.length); //to find length of a array
console.log(friends[friends.length-1]); //to find last index value

friends[2]='john'; //to replace a element at specific index
console.log(friends);
// friends=['ram','ravi'];     //error - here we are declararing const variable with anoother array this will not work


// we can put variables and another array values  in an array (even expressions also but not statements)
const firstName="sai";
const lastName="gowtham";
const mySelf=[firstName,lastName,"student",2023-2004,friends];
console.log(mySelf);


// Excercise 
const calcAge= function (birthYear){
  return 2023-birthYear;
}
const years1=[2004, 2003, 2002, 2001, 2000];

// console.log(calcAge(years1)); //this will not work because we are passing multiple once to the function parameter

const age1=calcAge(years1[0]);
const age2=calcAge(years1[1]);
const age3=calcAge(years1[years1.length-1]);
console.log(age1,age2,age3);


const ages=[calcAge(years1[0]),calcAge(years1[1]),calcAge(years1[years1.length-1])];
console.log(ages);