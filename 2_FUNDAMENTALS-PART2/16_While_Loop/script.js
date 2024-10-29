"use strict";
// While loop is more versatile than for loop because while loop can be used inhuge complex tasks.
// it is versatile because of it requires only logic part (not requires counter variable(intialisation part in loop) and incrementation part) in most of the situations.

for(let rep=1;rep<=10;rep++){                            
  console.log(`Lifting Weights Repetition ${rep} 🏋️`); 
}


// Here counter varaiable and initialisation required
let rep=1;
while(rep<=10){
  console.log(`While: Lifting Weights Repetition ${rep} 🏋️`); 
  rep++;
}


let dice=Math.trunc(Math.random()*6)+1; //here it returns only only one value. To get all values from getting 6 we reassign this inside that loop to take other values.

while(dice!==6){   //if it is 6 no iterations will be there
  console.log(`You rolled ${dice}`);
  dice=Math.trunc(Math.random()*6)+1;
  if(dice===6) console.log("Loop is stopped (dice=6)")
}