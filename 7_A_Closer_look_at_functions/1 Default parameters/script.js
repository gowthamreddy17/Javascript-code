"use strict";

//Default parameters - Sometimes it is useful that some parameters in functions are set by default.This way we don't pass them manually in case we don't change the default.

const bookings=[];

const createBooking=function(flightNum,numPassengers=1,price=199*numPassengers){
   
    //Es5 - setting default value with OR operator by short circuiting.
    // numPassengers=numPassengers||1;
    // price=price||199;

    //But in Es6 we can specify default value within the parameters like numPassengers=1, and even put expressions defined with other parameters, as default values like price=199*numPassengers


const booking={
    flightNum,
    numPassengers,
    price,
   }
   console.log(booking);
   bookings.push(booking);
};


//If no default values are there and not passed any value as an argument then undefined will be present there in place of value in the function. 
createBooking();


createBooking('LH123');


createBooking('LH123', 8, 2000); //If we pass all the parameters then they overides the default parameters already defined.

 
createBooking('LH123',2); //Here we are not passed third parameter i.e, price. So that it takes default value here and evaluates expression there 199*numPassengers where numPassengers is another parameter already passed here as 2.
createBooking('LH123',5);


//If we want to skip the parameter if there are other parameters after that we simply put that parameter as undefined. But default will be set as value, if there is default value to that parameter otherwise it will be undefined only.
createBooking('LH123',undefined,5000);