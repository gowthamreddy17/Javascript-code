"use strict";

/* This is more of a thinking challenge than a coding challenge 
Your tasks: 
1. Take the IIFE below and at the end of the function, attach an event listener that 
changes the color of the selected h1 element ('header') to blue, each time 
the body element is clicked. Do not select the h1 element again! 
2. And now explain to yourself (or someone around you) why this worked! Take all 
the time you need. Think about when exactly the callback function is executed, 
and what that means for the variables involved in this example. 

GOOD LUCK 
*/

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";

  document.body.addEventListener("click", function () {
    header.style.color = "blue";
  });
})();

//Here the addEventListener is the new function created in the IIFE. And aslo addEventListener contains a callback function which changes the h1 color to blue from red whenever we click on the body.
//By the time of callback here is executed the IIFE and header element is gone from execution (which is executed once).
//Here the header element inside the callback function still accessed the h1 due to the closure.
//Here closure makes variables (i.e, header in this case) to access or remembers all the variables when the function (i.e, here callback function) is born or created.
//so simply the 'header' is in the backpack of the callback function here.
