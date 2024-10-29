//exporting module
console.log('exporting module');

//blocking code
console.log('start fetching users');
// await fetch(`https://jsonplaceholder.typicode.com/users`);
console.log('finished fetching users');


const shippingCost = 10;
export const cart = [];

//Exports - named exports and default exports

//named exports is simplest way of exporting something from a module. just we use 'export' keyword

export const addToCart = function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} added to cart`);
};
//export can be use in top level scope only not in block scopes.

//we can export multiple things at same time with the named exports

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tQ };
// we can change the variable names of exported ones by using 'as'

//--Default exports - used when we want to export one thing for module.

export default function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} added to cart`);
}
