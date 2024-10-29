"use strict";

//IIFE - (Immediately Invoked Function Expression)
//IIFE - The function that is only executed once but never again in the code. (or) The function that disappears right after it is called once.

const runOnce = function () {
  console.log("This will never run again");
};
runOnce();
//But we can call this above function again.

//IIFE - With Regular functions
(function () {
  console.log("This will never run again");
  const isPrivate = 23;
})();

// console.log(isPrivate);

//Here this function is just a value or function expression and immediately we call there only by () at end of expression. So that is called IIFE

//IIFE - With Arrow functions
(() => console.log("This will also never run again"))();

//Why IIFE ?
//We already know functions create scopes. From the global scope we cannot access the variables that are defined in the scope of these functions.
//Here we can access any variable inside function or inner scope from the global scope but we cannot access variables from inner scope or function scope to the global scope.
//So all data defined inside a scope is private or this data is encapsulated.
//Encapsulation used to hide or protect our variables from overwriting from the program or external scripts or libraries.

//In Es6 - variables declared with 'let or const' will create their own scope inside block but not 'var'
{
  const isPrivate = 23;
  var notPrivate = 46;
}

// console.log(isPrivate); //Not accesible here because of const is block scoped.
console.log(notPrivate); //var is not block scoped.

//In modern javascript we are not using IIFE.
//Because if all  we want to create a new scope for data privacy. We need to create a block as shown above. There is no need to create a new scope with function, unless we want to var for our varaibles (but it we dont use var anymore).
//IIFE is still needed  in ES6 when w e need to execute a function once but not for creating function scope variables.




/*

Definition of IIFE: An IIFE, or Immediately Invoked Function Expression, is a function that is defined and invoked immediately after its creation. It executes only once and then disappears from memory.

Creating Private Scopes: IIFEs are used to create private scopes in JavaScript. Variables declared inside an IIFE are scoped to that function and are not accessible from the outside, preventing them from polluting the global scope and avoiding potential naming conflicts.

Encapsulation and Data Privacy: By using IIFEs, developers can encapsulate variables and functions within a private scope, enhancing data privacy and ensuring that variables are not accidentally overwritten by other parts of the program or external scripts/libraries.

Usage with Regular Functions: Regular functions can be immediately invoked by wrapping them inside parentheses followed by another pair of parentheses for the invocation, as demonstrated with the runOnce function.

Usage with Arrow Functions: Arrow functions can also be used in IIFEs, following the same syntax as regular functions but using arrow function syntax, as shown in the example with () => console.log("This will also never run again").

Modern JavaScript Practices: With the introduction of block-scoped variables (let and const) in ES6, the need for IIFEs has decreased. Block-scoped variables provide a simpler and more elegant way to create private scopes without the need for an IIFE.

Avoiding Global Pollution: IIFEs help avoid global scope pollution by limiting the exposure of variables and functions to the global scope. This can lead to cleaner and more maintainable code, especially in large-scale applications.

Use Case Example: In the provided code, an IIFE is used to define a private scope and declare a variable isPrivate. This variable is encapsulated within the IIFE and is not accessible from the global scope, preventing potential conflicts with other parts of the code. */