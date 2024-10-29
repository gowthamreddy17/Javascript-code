"use strict";
const newArray=[
  'sai',
  'gowtham',
  2023-2004,
  "student",
  ['michael','peter','john']
];

for(let i=newArray.length-1;i>=0;i--){
    console.log(i, newArray[i]);
}

//---- Loop inside another loop

for(let exercise=1;exercise<=3;exercise++){
  console.log(`--Starting Exercise ${exercise}`);
  for(let rep=1;rep<=5;rep++){
    console.log(`Excercise ${exercise}: Lifting Weight repetition ${rep}`);
  }
}


// here first for loop executes 3 times and second for loop executes 15 times
// Explanation:
// once exercise variable with value 1 enters into loop (excercise=1) then it prints
// --Starting Exercise 1
// Then it enters into inner loop and executes inner for loop condition(5 times)
// Lifting Weight repetition 1
// Lifting Weight repetition 2
// Lifting Weight repetition 3
// Lifting Weight repetition 4
// Lifting Weight repetition 5
// And Then goes back outer  loop and value incremented to 2(excercise=2)
// and then enters into inner loop  and executes same process(5 times)