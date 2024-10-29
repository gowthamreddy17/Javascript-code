//Importing module

// import { addToCart, totalPrice as price, tQ} from './shoppingCart.js';

// console.log(shippingCost); //the variable inside modules cannot be used here. they are private inside that module only. to use this we need to export from the module.

// addToCart('bread', 5);
// console.log(price, tQ);

// we can change the variable names of imported ones by using 'as'

console.log('Importing module');

// // import * as ShoppingCart from './shoppingCart.js';
// // //here we are trying to export everything from module like an object.

// // ShoppingCart.addToCart('bread', 5); //this is just like a class where can use that as public API and use those methods outside.

// // console.log(ShoppingCart.totalPrice);

// //importing default exports - we can assign any name here

import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('apples', 5);
add('milk packet', 3);

// //-- imports are infact a live connection to exports.
console.log(cart);

// //so the import does not creates a copy of export value they are connected in live. Here we we imported cart as empty but when we see cart it has values now.
// //import are not copy of export they ae like a live cxonnection.

// //default + named

// // import add, {addToCart, totalPrice as price, tQ} from './shoppingCart.js';

// //inside brackets are named exports outside brackets are default exports.

////////////////////////////////////////////////////////////////////////////////////

// // //using top level await - outside an async function

// // console.log('start fetching');

// // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

// // const data = await res.json();
// // console.log(data);

// // console.log('end fetching');

// // //but await outside the async function will block the next code execution

// const getLastPost = async function () {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

//   const data = await res.json();
// //   console.log(data);

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost);

// //not very clean
// // lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// //if one module imports a module which has a top level await then the importing module will wait for the imported module to finish the blocking code.
// //check the blocking code in shoppingcat module.

// //so using await top level will black the entire module.

//////////////////////////////////////////////////////////////////////////////

//using npm lodash

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es'; //parcel will look into the files that we are needed

const state = {
  cart: [
    { product: 'bread', quantity: 6 },
    { product: 'pizza', quantity: 4 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
//using lodash
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);

// with Object.assign we copy objects. but when we change copy object property then original object property also changed.
//to overcome that we use deep clone from lodash.

console.log(stateDeepClone);

//to keep the state in the browser and not force reloading the browser and doent change the state of page.
//these lines below not understand by the browser but it wil known to parcel
if(module.hot){
  module.hot.accept;
}

class Person{
  greeting = 'Hey';
  constructor(name){
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`)
  }
}

const gowtham = new Person('Gowtham');

//only some fieautures are transpiled back to ES5 by babel which has same implementation in ES5 but for other ones we need to use polly filling like below which install the core js in our script.js 

import 'core-js/stable'
// import 'core-js/stable/array/find'
// import 'core-js/stable/promise'

console.log(cart.find(el=>el.quantity>=2));
Promise.resolve('Test').then(x=>console.log(x));

//for pollyfilling async functions
import 'regenerator-runtime/runtime'