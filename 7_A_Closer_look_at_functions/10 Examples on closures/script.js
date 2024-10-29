"use strict";

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

g();
f(); // We also need to call 'f' after 'g' because it is defined in global scope.
console.dir(f); //Here the closure contains 'a'

// 'f' function really does close over any variables on the execution context which it was defined.
//'f' is created in global scope but we assigned a function to the 'f' inside the 'g' function.After 'g' finished its execution but  'f' is still closed over the variable environment of the 'g' function (that also includes 'a' variable).
// simply 'a' variable is in the backpack of 'f' function.

const h = function () {
  const b = 777;
  f = function () {
    // Here we reassigned 'f' again
    console.log(b * 2);
  };
}; //Here 'f' is different from above function because it is reassigned by 'h'

h();
f();

console.dir(f); //Here closure is reassigned as 'b' and doesn't contain 'a' here.

//Closure makes a function does not loss the connection to the variables were present at its birth place.
//Here 'f' is born in 'g' first and then reborn in 'h'.

// **Ex1: This above case is whenever we reassigned functions even without returning them, that also this will create a closure.

//------ Example 2
//Using a timer() that we don't need to return a function to see a closure in action.

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;

boardPassengers(180, 3); //180 passengers, 3 seconds

//setTimeOut() requires a function and other is time in milliseconds. So that function will be executed after that time we passed as argument. Here function we passed is a callback function i.e, called later in code.
//Here the callback function is created under the parrent function scope (i.e, boardPassengers() )
//Here setTimeOut() will be executed after 3 seconds (i.e, wait*1000 milliseconds)
//But, console.log(`Will start boarding in ${wait} seconds`); will not wait here for 3 seconds (or) it will be executed before the setTimeout().

//Here the callback function worked completely independently without depending from the boardPassengers().But still the callback function has access to all the variables that were in the variable environment in which it is created.(i.e, n, perGroup). So we can say that a closure created here.

//** Closure have more priority than scope chain */
//Here we declared the perGroup in global scope but it still access the perGroup which is in the function.
//So here javascript will look into the closure that it contains perGroup or not. If it doesn't contain then only it look into the scope chain or in the global scope.
