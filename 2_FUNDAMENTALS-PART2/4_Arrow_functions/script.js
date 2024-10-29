"use strict";


// function expression 
const calcAge1 = function(birthYear){
   return 2023-birthYear;
}


// -- Arrow functions --

// Arrow functions are introduced in ES6

// the values here will be returned implicitlly without a return statement for one liner functions for multiple lines return is still needed.
const calcAge2 = birthYear => 2023 - birthYear; 

const age1=calcAge2(2004);
console.log(age1);




const yearsUntilRetirement = (birthYear,firstName)=>{
    const age=2023-birthYear;
    const retirementAge=65-age;
    // return retirementAge;
    return `${firstName} has ${retirementAge} years left for retirement`;  //this statement will be returned.
}

let retirement=yearsUntilRetirement(2004,'gowtham');
console.log(retirement);