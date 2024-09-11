// Logical operators 
// And operator is true if both are true
// or operator is true if anyone is true
// NOT means inverse 
const hasDriverLicense = true;
const hasGoodVision =true;
console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

// if(hasDriverLicense && hasGoodVision){
//     console.log("I am able to drive");
// }
// else{
//     console.log("some one has to drive");
// }


const isTired = false;
console.log(hasDriverLicense && hasGoodVision && isTired);
if(hasDriverLicense && hasGoodVision && !isTired){
    console.log("I am able to drive");
}
else{
    console.log("some one has to drive");
}
