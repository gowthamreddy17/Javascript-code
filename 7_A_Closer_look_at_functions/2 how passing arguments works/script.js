"use strict";

//This lecture will be similar to the primitives vs objects lecture in how javascript works behind scenes.

const flight = "LH234";
const gowtham = {
  name: "Sai Gowtham",
  passport: 234567890,
};

const checkIn = function (flightNum, passenger) {

  flightNum = "LH999";
  passenger.name = "Mr." + passenger.name;

  console.log(flightNum);
  console.log(passenger);

  if (passenger.passport === 234567890) {
    alert("Checked In");
  } else {
    alert("wrong passport");
  }
};

checkIn(flight, gowtham);
console.log(flight);
console.log(gowtham);


//Here we declared a flight varaiable which has a primitive data type (i.e, string). When we passed that flight into the the checkIn function as an argument which is flightNum (that will be a copy of the original value) and  changed that flight number in function but it doesn't affected on the original one (i.e, flight). This is because flightNum is just a seperate copy of the flight variable. So there will be no connection when they are manipulated. This is same as flightNum=flight.

// Primitive values are stored in own piece of memory in call the call stack

//here Objects are just reference types or reference values, stored in heap memory and the stack keeps reference to the memory position that where the object stored in the heap memory.

//Here in the 'Gowtham' object we have name and passport. When we passed that 'Gowtham' object into the function as an argument which is passenger. Here we tried to change the name in 'passenger' object but that it is also affected in the 'gowtham' object it is because of these passenger and gowtham points to same refernce of object copy in the memory.


//Summary: Passing a primitive type to  a function is really same as creating a copy like flightNum=flight  outside of the function. So the vallue is simply copied.
//On ther hand, when we pass an object to a function is like passenger = gowtham. So Whatever we change in a copy will also effect in the original one.



// These weird behaviour of objects will defintely affected while working on large code bases.

const newPassport = function(person){
    person.passport=Math.trunc(Math.random()*1000000000); //To get a random number
};

newPassport(gowtham);
checkIn(flight,gowtham);



//Here two functions manipulating same object. in new passport function we are passing the same gowtham object as argument later it is called as person in function. As we manipulates that person object it also affects on gowtham object.

//So that we got wrong passport in the alert()

//So this a best example how the interction of different functions manipulating same object can create some issues.


//Javascript does not have passing by reference only passing by value.Even though it looks like passing by reference.

//In other languages like c++ , when we pass a reference to any value instead of value itself.This could even works with primitives we could pass a reference to value of five then the value outside of the function will aslo changed.This is  called pass by reference.


//But javscript doesn't have pass by reference. But for objects we do pass in a refernce which is memory address of the object.However that reference is still a value of contains a memory address. So basically we pass a reference to the function but we do not pass by reference 
