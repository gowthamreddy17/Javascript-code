"use strict";

// adding elements
const friends=["michael","steven","peter"];
const newLength=friends.push("gowtham"); //methods return a value too..
console.log(friends);
console.log(newLength);

friends.unshift("sai");
console.log(friends);


// removing elements
const popped=friends.pop(); //removes last element of aaray
console.log(friends); 
console.log(popped); //returns what value is removed(popped) from array

friends.shift();//first element is removed from array
console.log(friends);


// working with indexes
friends.push(23);
console.log(friends.indexOf('steven'));
console.log(friends.indexOf('bob'));
// includes is a modern es6 method which uses strict equality condition and returns true if present otherwise false
console.log(friends.includes('steven'));
console.log(friends.includes('bob'));
console.log(friends.includes('23')); //this is false because 23 is number in array but not a string


if(friends.includes('peter')){
  console.log("you have a friend called peter");
}
else{
  console.log("you have no friend called peter");
}

