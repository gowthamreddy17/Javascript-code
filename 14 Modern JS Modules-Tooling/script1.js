// //The module pattern - old way
// const ShoppingCart = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push(product, quantity);
//     console.log(`${quantity} ${product} added to cart`);
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from stock`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// ShoppingCart.addToCart('apple', 4);
// ShoppingCart.addToCart('pizza', 2);
// console.log(ShoppingCart);

// //we cannot access the not returned properties outside it will be undefined.
// console.log(ShoppingCart.shippingCost);

//here the IIFE only once executed then it returns an object store in the ShoppingCart as an object.
//this is because of closures which allows functions to have access to the variables at birth place (even after execution of function).
//*** */
//with this way of module patttern we need to create javascript files like this and all needed to linked to the html that becomes a clumpsy or confusing to put which one first.And even we cannot use bundling with this module pattern.
//that's why use native modules in ES6


////////////////////////////////////////
//Besides ES6 and module pattern there are other types which are present such as common JS modules.
//common Js modules are not native part of javscript they rely on some external implementations.

//CommonJs modules are used in NodeJs but very recently Es modules implemented in javascript.

//just like Es6 one file is one module.


// //Export
// export.addToCart = function (product, quantity) {
//     cart.push(product, quantity);
//     console.log(`${quantity} ${product} added to cart`);
//   };

//   //this wont work in browser but will work in nodejs.
// //export is an object that is only defined in nodejs.

// //Import 
// const {addToCart} = require('./shoppingCart.js')

// //require is that is only defined in nodejs environment not in browser.

////////////////////////////////////////////

