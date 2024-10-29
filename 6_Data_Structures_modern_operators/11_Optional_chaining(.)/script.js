"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3] /*thu*/]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [weekdays[5] /*sat*/]: {
    open: 0,
    close: 24, //Opens 24 hours
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Frienze,Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex, time = "8:00", address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  }, //Only passed in one object or one argument here into function but we did not passed four arguments here. As we recieve that we immediately destructuring. so we used the property names in the object {properties} as argument where properties bot be in order while destructuring.

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },

  openingHours,
};

//console.log(restaurant.openingHours.mon);
// returns undefined because 'mon' property doesn't exist on the opening hours object.

//console.log(restaurant.openingHours.mon.open);
// Throws an error because reading undefined property further will result error. here 'mon' is undefined property and when we further access it with 'open' property on undefined (which doesn't exist) will result error.
//To overcome this we are using below if statement which returns open property in console only the if statement condition is true i.e, if mon property exist otherwise it will undefined (falsy).

//---- Accessing a property that doesn't exist

if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
//Here we are accessing 'mon' property from opening hours which doesn't exist so that if statement returns falsy value (i.e, undefined) so that next line will not be printed. so we get rid off the error in next line by accesing another property (open) from an not existing ('mon')-(undefined) property

//checking multiple object properties exist or not
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
//Here we are checking the both conditions that if statement becomes true when openingHours Property exist then only it checks 'mon' property exists in openingHours Property. when we have more deeply nested objects these if statements make confusion to overcome this we use optional chaining.



//---*** Optional Chaining - If a certain property doesn't exist then undefined will returned.
console.log(restaurant.openingHours.mon?.open);
//Here 'restaurant.openingHours.mon' doesn't exist (or that expression returns null or undefined), so that it returns undefined here. so that it doesn't consider 'open' property further.So we won't get error because undefined property cannot accesed further because of optional chaining.

//-- multiple optional chaining
console.log(restaurant.openingHours?.mon?.open);

//Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  // console.log(day)
  const open = restaurant.openingHours[day]?.open ?? "closed";
  // if we want use the variable name as property that name we need to use the object bracket notation. Here in openingHours[day], day is not a property in openingHours. so we use that in bracket notation.
  //Here in openingHours[day],the day is coming dynamically from days array. so thet it becomes, openingHours.mon, openingHours.tue and so on...
  console.log(`${day} opens at ${open}`);
}

//Here iterated day array using for of loop to get each day printed in console.
//Here the both nullish coalescing operator and Optional chaining works on nullish values concept. here nullish values are null aand undefined. both are introduced in ES2020, to work together.

// *** ---- Optional chaining with Methods - - For calling methods, where we check a method exists before we call it.

console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderBiriyani?.(0, 1) ?? "Method does not exist");
// Her orderBiriyani method doesn't exist so we get undefined when calling a function so that nullish coallescing operator sets the default string we provided as Method does not exist.

//** Optional chaining with Arrays -- To check if an array is emty or not.
const users = [
  {
    name: "gowtham",
    email: "gowtham@gmail.com",
  },
  {
    name: "sai",
    email: "sai@gmail.com",
  },
];

//with if else
if (users.length>0) console.log(users[0].name);
else console.log("users array is empty");

//With optional chaining
console.log(users[0]?.name??"users array is empty");
//Here optional chaining checks the left side users[0] exists, if exist it will return name other wise undefined nullish coallescing operator sets the default string we provided as Array is empty.

console.log(users[1]?.name??"users array is empty");
console.log(users[2]?.name??"users array is empty or user not exist");
// here user[2] not exist.
