"use strict";

//Why Actually array Have Methods?
//--Methods are simply functions that we call on objects. so they  are functions attached to objects.
//If we have array methods, so arrays themselves are also objects. so these array methods are also simply functions that are attached to all arrays taht we create in javascript.
//So arrays are objects, they have special access for built in methods.

//--- Array Methods
let arr3 = ["1", "2", "3", "4", "5"];
let arr = ["a", "b", "c", "d", "e"];
let arr4 = arr.slice();
//--- Slice - with this method we can extract part (slice) of any array elements without changing original array.
//slice() method returns a new array without changing original array.
console.log(arr.slice(2)); //Here it start extracting array from 2nd index.
console.log(arr.slice(2, 4)); //It includes 2,3 (2 to 4. Here 4 not included) (we need to assume endParameter-1)
console.log(arr.slice(-2)); //It extracts last two elements.
console.log(arr.slice(-1)); //It extracts last element of an array.
console.log(arr.slice(1, -2)); //It starts from 1 and extracts everything except last two elements.

//slice() method  is used to create a shallow copy of any array.
console.log(arr.slice());
//We can do this shallow copy of an array by spread operator also.
console.log([...arr]);

//splice() - It works same as slice() but the difference is it changes the original array.
console.log(arr4.splice(2));
console.log(arr4); //here the splice method removes the part of extracted elements of an array from original array. i.e, from index 2 here.
//Mainly we use splice() to delete one or more elements.
console.log(arr3.splice(-1)); //To remove last element from an array
console.log(arr3);

//In splice(first one is begin, second parameter is delete count)
console.log(arr3.splice(1, 2)); //It removes 2 elements from index 1
console.log(arr3);

//-- reverse() - It is used to reverse the array. It changes the original array also.
let arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

//concat() - to join or concatanate two arrays. It doesn't change original arrays.
const letters = arr.concat(arr2);
console.log(letters);
//Here the first array where we call the method and second array is passed in concat() method.

//We can do concatanetion with spread operator
console.log([...arr, ...arr2]);

//join() method - to join all elements in an array with a seperator.The result will be a string here.
console.log(letters.join("-"));

//Pop(), push(), shift(), unshift(), index(), includes() are also array methods.
