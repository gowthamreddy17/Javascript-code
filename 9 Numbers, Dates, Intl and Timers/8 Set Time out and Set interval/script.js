"use strict";
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

//Set Time out - just runs once after a defined time.
//set Interval timer - keeps running forever until we stop it.


//SetTimeOut()- simply schedules a function to run after certain amount of time but the call back is executed only once.
setTimeout(() => console.log("here is you pizza 🍕"), 3000);
console.log("Waiting...");

//As soon as javascript hits the setTimeout() code with call back function it will simply keeps counting the time in background and register the callback function to be called after that time has ellapsed or completed. After that javscript immediately will move on to next line for execution until call back function is called.This mechanism is called asynchronous javascript.

//------------------

//Passing arguments

setTimeout(
  (ing1, ing2) =>
    console.log(`Here is your burger 🍔 with ${ing1} and ${ing2}`),
  6000,
  "bread",
  "chicken"
);

//-----------

//setting clearTimeout() before the time ellapsed or completed

const ingredients = ["rice", "dal", "ghee"];

const pizzaTimer = setTimeout(
  (ing1, ing2, ing3) =>
    console.log(`Here is your food 🍚 with ${ing1}, ${ing2}, ${ing3}`),
  9000,
  ...ingredients
);

if(ingredients.includes("ghee")) clearTimeout(pizzaTimer);
// if(!ingredients.includes("ghee")) clearTimeout(pizzaTimer);

//Here this function will not work because here we use clearTimeOut() with a condition so that message inside callback function will not be displayed in the console because it breaks that time when javascript reaches the if condition wiil become true then callback function not executed. If it becomes false then callback function will be executed after  9 seconds.


//-------------------------------------

//SetInterval - If we want to run a function repeatedly after time interval (like for every 5 seconds).

const options = {
  hour: 'numeric', // hour:'2-digit',
  minute: '2-digit', //minute: 'numeric'
  second:'numeric',
  day: 'numeric',
  month: 'numeric', //month: 'numeric, //month:'2-digit',
  year: 'numeric', //year: '2-digit',
  // weekday: 'long', //weekday: 'short', weekday: 'narrow',
};

setInterval(function(){
  const now = new Date();
  console.log(new Intl.DateTimeFormat('en-IN', options).format(now));
},1000);

//Here this call callback function executing repeatedly for every 3 seconds. Every 3 seconds later new Date() will be created and current date is printed to console.