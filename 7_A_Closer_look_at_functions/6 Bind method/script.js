"use strict";

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  //book : function() {},
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
  },
};
//Here this key word points to luftanasa object.

//   lufthansa.book(239, "Sai Gowtham");
//   lufthansa.book(600, "Jonas");
//   console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

//Bind method - It is similar to the call() method. The difference is the bind doesn't immediately call the function instead it returns a function where the 'this' keyword is bound. It sets to whatever value we pass to bind.

const bookLH = book.bind(lufthansa);

const bookEW = book.bind(eurowings);
bookEW(23, "Steven Williams");
//Here bind will not call the book() function immediately but it returns a new function where 'this' keyword is set already or preset here to 'eurowings' object. So later, we can call that returned function like a regular function.


// -- we can preset arguments also in bind method
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Gowtham')
//Here we can specify the arguments to be constants (predifined ones or presetted) which is like 'this' keyword explicitly setted to eurowings object. Here we passed '23' into the bind method that becomes the preset there. so we no need to pass the flightNumber later in returned function. Just we need to passengerName only while calling that returned function.


//Here we used "Partial application" - a part of the arguments of the original function are already applied (already set or preset).



//With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function(){
    this.planes++;
    console.log(this);
    console.log(this.planes);
};

let hello=lufthansa.buyPlane.bind(lufthansa)
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
//Normal behaviour without bind method:
//In an event handler function the 'this' keyword points to the element on which the handler is attached.
//Here this keyword points to the button element.
//But if we call lufthansa.buyPlane() directly without event listeners then this points to lufthansa object. because object calling the function.
//But in the above case event listener function calling this function.
//With Bind method
//Here call method calls the function that's not we need, So we used bind() method to make the 'this' points to lufthanasa object (or) we presetted 'this' to lufthanasa object.



//-- Partial application (preset parameters)
const addTax = (rate,value) => value + value * rate;
console.log(addTax(0.1, 200));

//Preset the argument
const addVAT = addTax.bind(null, 0.23);
//const addVAT = value => value + value * rate;
//Here 'this' key word point to null (i.e, nothing) because we don't need it here. But we predefined the rate to '0.23'.

console.log(addVAT(100));
console.log(addVAT(23));


//** We think that preset arguments can be done with default parameters but it is different. Using bind, Here we get a new function returned based on a general function.



//Without Bind method the above function look like
const addTaxRate = function(rate){
 return function(value){
   return value + value * rate;
 }
};

const addVAT1 =addTaxRate(0.23);
console.log(addVAT1(100));
console.log(addVAT1(23));

//Here we created addTaxRate which takes rate as argument and returns a new function which needs a value.
//So we called addTaxRate with rate '0.23' and stored that retuned function in the variable. After that we called the returned function with value.
