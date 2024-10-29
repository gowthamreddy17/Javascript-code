"use strict";

//Closures:

/* A closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone; 
(OR)
A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time. 
(OR)
A closure makes sure that a function doesn’t loose connection to variables that existed at the function’s birth place; 
(OR)
A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were 
present in the environment where the function was created.

 ☝We do NOT have to manually create closures, this is a JavaScript feature that happens automatically. We can’t even access closed-over variables explicitly. A closure is NOT a tangible JavaScript object */

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking(); //Here booker() function is the returned function of secureBooking() function.

booker();
booker();
booker();

console.dir(booker); //TO look at the all properies of the function such as scopes , closure etc.. If any thing encoded there in [[]] taht is an internal property we have no right to change that in execution.

//Here Global Execution context  and Global Scope contains secureBooking() and booker() functions.

//Here secureBooking() scope contains passengerCount variable.

//When the execution  of secureBooking() has done it's job then it is popped out from  call stack.

//When secureBooking() has finished its execution but it still have access to passengerCount variable. (or) But still the returned function  ( i.e, booker() which is inner function) has the access of passengerCount in the outer function this is because of 'Closures' where it rememembers all the varaiables at function created or at function birth place.

//Closure makes access to the passengerCount by the booker() function by concept of "Any function always has access to the variable environment of the execution context that function is created".

//A closure has more priority than the scope chain for example if decalre passengerCount in global scope and also in function scope it only takes at the variable at function scope. this because javascript first look into closure and then after in scope chain or global scope.
