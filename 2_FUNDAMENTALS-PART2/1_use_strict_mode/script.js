// strict mode is used to overcome errors,bugs and to write a secure code


"use strict";
let a=50;  // not using let here throw error in strict mode
console.log(a);

//strict mode is also useful when we wrongly declare a varaiable 
let driverLicense=false;
const testPass=true;
if(testPass) driverLicense=true;// by typing  mistake varaiable will not throw error but using strict it will throw error
if(driverLicense) console.log("i can drive");


// we cannot use javascript future resrved keywords as variables
// const interface='audio';
// const private=667;