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

lufthansa.book(239, "Sai Gowtham");
lufthansa.book(600, "Jonas");
console.log(lufthansa);
console.log(lufthansa.bookings);


const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;
// book(23,'sarah'); //This will not work, because here 'this' is undefined because of regular function instead of a method.

//Here book is a just  copy of the book method in the lufthansa object (lufthansa.book). so that becomes a regular function here so here  this keyword points to undefined.
//this key word depends on how the function is called.


//So to overcome that we can explicitly assign 'this' keyword by - call, apply and bind function methods.
//function is just an object. So objects have methods so functions also have methods.


//--- Call method - explicitly defines the 'this' keyword in any function we want.

book.call(eurowings, 23, "Sarah Williams");
//Here we are explicitly telling javascript to which object the 'this' keyword should point .
//Here we are not calling the book function ourselves but we are saying to 'call()' method to call the book function where the this keyword set to eurowings object i.e, first argument sets the this key word and remaining arguments are passed to the original function, 23, "Sarah Williams" are only passed to book() function.

book.call(lufthansa, 234, "Mary cooper");
//Here this points to lufthansa object (which is explitily set) which is passed as first argument.

const swiss = {
  airline: "Swiss Air lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Mary Cooper");
console.log(swiss);


//--- Apply method - It is similar to call method but the difference it doesn't take list of arguments to pass (after the this keyword) instead it takes as an array of the arguments.

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
//Here the first argument swiss points 'this' keyword explicitly to the 'swiss' object. and second argument is the array of arguments.

//In modern javascript we doesn't use the apply method. Instead we use same call() method for this use case also.
book.call(swiss, ...flightData);
//Here the first argument swiss points 'this' keyword explicitly to the 'swiss' object. and second argument is the array of arguments but we are spreading them with spread operator.






const person1={
  firstName:'sai',
  lastName:'gowtham',
  fullName(){
    return this.firstName+' '+this.lastName
  }
}

const person2={
  firstName:'ravi',
  lastName:'kumar',
}

person1.fullName();
// person2.fullName();

const borrowedFullName = person1.fullName;
console.log(borrowedFullName.call(person2));
