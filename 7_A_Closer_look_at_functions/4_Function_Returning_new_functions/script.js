"use strict";

const greet = function (greeting) {
    return function(name){
        console.log(`${greeting}, ${name}`);
    }
};

const greetingsHello=greet('Hello');
greetingsHello('Gowtham');
greetingsHello('Sai');

//Here greet() function is higher order function which returns another new function and that function call with 'hello' as argument, we stored in the greetingsHello variable. So that variable greetingsHello becomes a function so that we can call it and pass the name as an argument.


//Doing all this in one go!
greet('Hey')('Gowtham');

//Here greet('Hey') is an function (call) then we are calling that entire function again with ('Gowtham').


//Using Arrow Functions
const greetin = (greeting) => {return (name)=>{
    console.log(`${greeting}, ${name}`);
}};

greetin('Hello')('Gowtham')

//Using another way of arrow function for the above

const greetArr = greeting => name =>  console.log(`${greeting}, ${name}`);
greetArr('Hi')('Gowtham')

//Here one arrow function returning another arrow function.