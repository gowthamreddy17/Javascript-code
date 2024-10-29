"use strict";

const calcAge1 = function(birthYear){
    return 2023 - birthYear;
}


const yearsUntilRetirement = function (birthYear,firstName){
    const age=calcAge1(birthYear);// it takes the value from yearsUntilRetirement function parameters and send to calcAge1 function and the returned value from that calAge1 function stored in this 'age' variable 
    const retirementAge=65-age;
    if(retirementAge>0){
      console.log(`${firstName} retires in ${retirementAge} years`);
    return retirementAge;
    }
    else{
        console.log(`${firstName} has already retired 🎉`);
        return -1;
    }
   // return `${firstName} has ${retirementAge} years left for retirement`;
}
console.log(yearsUntilRetirement(2004,'Gowtham'));