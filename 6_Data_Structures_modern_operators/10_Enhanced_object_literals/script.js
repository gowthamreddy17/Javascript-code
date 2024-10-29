"use strict";

const weekdays=['mon','tue','wed','thu','fri','sat','sun']; 

const openingHours = {
  [weekdays[3]] /*thu*/: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  [weekdays[5]] /*sat*/: {
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

  //Before Es6 - Here the property name and object name are same that would be annoying and difficult in  some cases.
  //openingHours:openingHours,
  //After Es6 - Enhanced object literals
  openingHours,
};





//  In Enhanced object literals - After Es6

//1. Acccessing a object as a property inside another object

//Before Es6 - Here the property name and object name are same that would be annoying and difficult in  some cases.
//openingHours:openingHours,

//After Es6 - Enhanced object literals
//openingHours,






//2. Writing methods (functions) in enhanced object literals

//--- Before Es6
// orderPizza: function (mainIngredient, ...otherIngredients) {
//   console.log(mainIngredient);
//   console.log(otherIngredients);
// },

//--After Es6 -- writing methods with Enhanced object lierals 
// orderPizza(mainIngredient, ...otherIngredients) {
//   console.log(mainIngredient);
//   console.log(otherIngredients);
// },
//We no longer to create a property and set to a function expression. Here semicolon and function keyword are not required for creating a method.
//Here both works same but syntax wise, second one (After Es6) is easy.




//3. We can compute (calculate) property names instead of having them out manually and literally

//suppose in openingHours object we have property names like - thu,fri,sat. Thus we made an array of all days we accesed the property name as array index value. [weekdays[3]]:-thu