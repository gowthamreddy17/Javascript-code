"use strict";

// Primitive Types
// Primitive values are stored in own piece of memory in call the call stack
let lastName ='Gowtham';
let oldLastName=lastName;
lastName='Sai';
console.log(lastName,oldLastName);


// Reference Types
// Objects - Reference values, stored in heap memory and the stack keeps reference to the memory position that where the object stored in the heap memory.

const Gowtham ={
  firstName:'sai',
  lastName:'gowtham',
  age:19,
};

const Gowtham1=Gowtham;
Gowtham1.lastName='gowtham reddy';
console.log(Gowtham);
console.log(Gowtham1);
// When we copy a object like this into another then the two objects have same reference in heap memory from the call stack.
// Here we tried to change lastName in Gowtham1 but it also changed in Gowtham that is  because of these two objects have same reference in memory.

// Gowtham1={}; //Error! we cannot reassign 'const' the object with  because it is in stack. But we can change object methods values because they are in heap memory.




// Copying objects
const Gowtham2 ={
  firstName:'sai',
  lastName:'gowtham',
  age:19,
  friends:['ram', 'john']
};

const GowthamCopy=Object.assign({},Gowtham2);
GowthamCopy.lastName='gowtham reddy';
// console.log(GowthamCopy);
// console.log(Gowtham2);
// --Object.assign() creates a new object inside heap memory instead using the object already present in heap memory.
// --Here Object.assign() simply creates a 'shallow copy' - copying the properties in first level i.e, it cannot copy properties of an object inside a object (like nested objects).It is possible through only by 'deep cloning' to copy everything. 

GowthamCopy.friends.push('ravi');
console.log(GowthamCopy);
console.log(Gowtham2);
//Here friends array (also an object) when we change a array value in one object it definetely effects in another object also because shallow copy - Object.assign() makes a copy of properties or methods only in first level(that means it cannot take nested object properties (i.e, here array cannot be shallow copy)).
// So here array value cannot be copied seperately as reference for the two objects. It will be same reference of array in heap memory for the GowthamCopy and Gowtham2 objects.
// So the friends array will have same reference in heap memory to the GowthamCopy and Gowtham2 objects in the call stack. So one object property (here array) changes other object property(array) will be changed.
 