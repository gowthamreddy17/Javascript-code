"use strict";

// console.log("Lifting Weights Repetition 1 🏋️");
// console.log("Lifting Weights Repetition 2 🏋️");
// console.log("Lifting Weights Repetition 3 🏋️");
// console.log("Lifting Weights Repetition 4 🏋️");
// console.log("Lifting Weights Repetition 5 🏋️");
// console.log("Lifting Weights Repetition 6 🏋️");
// console.log("Lifting Weights Repetition 7 🏋️");
// console.log("Lifting Weights Repetition 8 🏋️");
// console.log("Lifting Weights Repetition 9 🏋️");
// console.log("Lifting Weights Repetition 10 🏋️");


// Instead of repeating this 10 times we use for loop to  iterate  or repeat this statement
//(counter);(logic);(increment/decrement)
for(let rep=1;rep<=10;rep++){                             //keeps running the condition until it is TRUE
  console.log(`Lifting Weights Repetition ${rep} 🏋️`); 
  // console.log("Lifting Weights Repetition",rep);
}





//Looping Arrays Breaking And Continuing

const newArray=[
  'sai',
  'gowtham',
  2023-2004,
  "student",
  ['michael','peter','john']
];

const types=[];


// console.log(newArray[0]);
// console.log(newArray[1]);
// console.log(newArray[2]);
// console.log(newArray[3]);
// console.log(newArray[4]);
//newArray[5] does NOT EXIST

// To do the same thing as above with  for loop

for(let i=0;i<newArray.length;i++){                //i<5 here because indexing starts from '0'
  // Reading from array
  console.log(newArray[i], typeof newArray[i]);

  // Filling an array with values
  // types[i]= typeof newArray[i];                    // types[0] = typeof newArray[0] ........
            //(or)
  types.push(typeof newArray[i]);
}
console.log(types);                                 //['string', 'string', 'number', 'string', 'object']



// To calculate Ages
const birthYears=[2004,2005,2006,2007];
const ages=[]

for(let i=0;i<birthYears.length;i++){
  ages.push(2023-birthYears[i])
}
console.log(ages);





// Continue and Break
// Continue - It is to exit or skips the current iteration of the loop and continue to next iteration of loop
// Break - It terminates the loop completely

console.log("-- ONLY STRINGS--")
for(let i=0;i<newArray.length;i++){              
  if(typeof newArray[i] !== 'string') continue; // if value is not string skip that value
  console.log(newArray[i], typeof newArray[i]);
}

console.log("-- BREAK WITH NUMBER--")
for(let i=0;i<newArray.length;i++){              
  if(typeof newArray[i] !== 'number') break;  // if number found stop loop
  console.log(newArray[i], typeof newArray[i]);
}

