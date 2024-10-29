"use strict";
// functions contains a blocks of code that can be reused again in the program.
function logger(){
    console.log("Gowtham");
}

logger(); //calling or invoking or running a function
logger();


function fruitProcessor(apples,oranges){ //here apples, oranges are parameters
    // console.log(apples,oranges);
    const juice=`Juice with ${apples} apples and ${oranges} oranges`;
    return juice;     //returning juice value from function
}

const appleJuice = fruitProcessor(5,0); //5,0 are arguments here
//we are storing the returned values from above function (with arguments) in a variable
console.log(appleJuice);


//we can do this without storing in a variable also
console.log(fruitProcessor(5,0));



const appleOrangeJuice = fruitProcessor(2,4); //with another arguments for same function by using another variable
console.log(appleOrangeJuice);

const num = Number('23'); // built in functions 