"use strict";

const newArray=[
  'sai',
  'gowtham',
  2023-2004,
  ['michael','peter','john']
]

// the drawback using array is we would not be able to find values without any reference or key 

const newData={
  firstName:'sai',
  lastName:'gowtham',
  age:2023-2004,
  job:'student',
  friends:['michael','peter','john']
}

// Dot and Bracket Notation

console.log(newData.lastName);  //Dot Notation
console.log(newData['lastName']); //Bracket Notation

const nameKey = 'Name';
console.log(newData['first'+nameKey]); //'first'+'Name'= firstName
console.log(newData['last'+nameKey]); //we can use expresions in bracket notation

// console.log(newData.'first'+nameKey); //expressions not allowed dot notation

//If we want t use variable names as proprty names use bracket notation

const interestedIn= prompt('What do you want  to know about gowtham? Choose Between firstName, lastName, age, job, friends');

if(newData[interestedIn]){
  console.log(newData[interestedIn]);
}
else{
  console.log('wrong request! Choose Between firstName, lastName, age, job, friends');
}


// To add new values into object
newData.location='India';
newData['twitter']='gowtham reddy';
console.log(newData);


// challenge
// Gowtham has 3 friends and best friend is michael

console.log(`${newData.lastName} has ${newData.friends.length} friends amd the best one is ${newData.friends[0]}`);