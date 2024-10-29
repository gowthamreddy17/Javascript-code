"use strict";

const arr = [23, 11, 64];
//Old bracket notation to get value at particular index.
console.log(arr[0]);
//By using at() method to get value at particular index.
console.log(arr.at(0));

//at() method can be more use in some cases instead of bracket notation
//-- suppose to get last element when we don't know array size or length.
console.log(arr[arr.length - 1]); //array length - 1 (i.e, 3-1=2, 2nd index). Array index starts from zero
console.log(arr.slice(-1)[0]); //slice method here returns last element in seperate array so we used bracket notation to get that value.

//Using at() method to get last element
console.log(arr.at(-1)); //It works same as slice() method in this case which takes last element of an array but seperated as an value.
console.log(arr.at(-2));

//If you want to do multiple method chaining or to count from end of array then use at() method. When you want to quickly access the array value (just like first element) then use bracket notation.


//--At() method works on strings also
console.log("Gowtham".at(0));
console.log("Gowtham".at(-1));
