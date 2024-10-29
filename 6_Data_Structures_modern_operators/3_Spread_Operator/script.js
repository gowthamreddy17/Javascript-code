"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Frienze,Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24, //Opens 24 hours
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //   orderDelivery(obj){
  //    console.log(obj);
  //   }
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex,
    time = "8:00",
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  }, //Only passed in one object or one argument here into function but we did not passed four arguments here. As we recieve that we immediately destructuring. so we used the property names in the object {properties} as argument where properties bot be in order while destructuring.

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
};

// **Spread operator - used to expand an array into all its elements or unpacking all the array elements at one

//Spread operator similar to array destructuring because it also helps us get elments out of arrays. but the main difference that spread operator takes all the elements from the array and it also doesn't create new variables. And as a consequence, we can only use it in the places where would otherwise write values seperated by commas.

//We can use the spread operator mainly when building an array or when we pass values into a function. Because they only expect multiple values seperated by commas

const arr = [7, 8, 9];
// Without spread operator manually adding elements in the array beggining
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

// const newArr=[1,2,arr];  //It makes a nested array but not brings the arr[] elements seperately.

// With spread operator adding elements in the beggining of array
// spread operator basically takes out all elements from array(unpacks elements from array seperately)
const newArr = [1, 2, ...arr];
console.log(newArr);

// whenever we need an array elements individually we use spread operator
console.log(...newArr);

// creating an array with existing elements of array and adding extra elments to it
const newMenu = [...restaurant.mainMenu, "Birayani"]; //Not manipulating the mainMenu array. here we are creating newMenu from scratch but we are using elements from mainMenu
console.log(newMenu);

// Copy Array - shallow Copy
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 Arrays

// const menu=[...restaurant.starterMenu+ [...restaurant.mainMenu]];   //It makes each letter seperated from the two array elements
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// we can use spread operaor on iterables

//Iterables are arrays, strings, maps, sets but not objects

const str = "gowtham";
const letters = [...str, "", "P."];
console.log(letters);
console.log(...str);
// console.log(`${...str} Reddy`); //Error! This will not work here in string literal. It does not accept multiple values which are seperated by commas.




// Real world example

// Function which takes multiple arguments then use spread operator to pass those arguments

const ingredients = [
//   prompt("Let's make pasta! Ingredient1?"),
//   prompt("Ingredient2?"),
//   prompt("Ingredient3?"),
];

console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

restaurant.orderPasta(...ingredients);

// **Objects

// From Es 2018 - spread operator works on objects even though objects are not iterables

// Adding additional data in a newly created object data and with our own data
const newRestaurant = { foundedin: 1998, ...restaurant, founder: "thomas" };
console.log(newRestaurant);


// Shallow copying in objects - by using spread operator instead using of object.assign() 
const restaurantCopy={...restaurant};
restaurantCopy.name='Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);

// Here the orignal 'restaraunt' object doesn't changes even when we change the 'restaurantCopy' object properties by using spread operator. But with object.assign() it makes changes in the original object also.