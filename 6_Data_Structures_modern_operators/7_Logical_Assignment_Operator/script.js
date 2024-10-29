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

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//Logical Assignment operators - Introduced in ES 2021

const rest1 = {
  name: "Burger King",
  numGuests: 20,
};

const rest2 = {
  name: "Pizza hut",
  owner: "Frank Carney",
};

const rest3 = {
  name: "KFC",
  numGuests: 0,
};

//Setting default value with OR operator
//Here in Short circuiting OR operator if first value is truthy then it will be immediately returned and will not evaluate second value or operand.
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests = rest1.numGuests || 10;
// rest3.numGuests = rest3.numGuests || 10;

// console.log(rest1);
// console.log(rest2);
// console.log(rest3);
//Here rest1 has numGuests=20; so it becomes truthy when expression is evaluted and OR operator short circuits there, then default value will not be set here.
//Here rest2 has no numGuests property, so it becomes undefined which is falsy. Then OR operator evaluates second operand which is 10 (i.e. truthy value). Then 10 will be set as default value will be set in rest2 object by creating numGuests property.
//Here rest3 has numGuests=0; which is falsy but it is also value we use. So here the defalut value is set 10 when second operand is evaluated. To overcome that and use 0 we use nullish Asiignment Operator

//------  OR Assignment Operator ------
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// rest3.numGuests ||= 10;
// console.log(rest1);
// console.log(rest2);
// console.log(rest3);
//OR assignment operator assigns a value to a variable if that variable is currently falsy, works same as OR operator

// rest3.numGuests = 0; // Here the OR operator sets 10 as default value in above code. Inorder to use to use 0 that below nullish Assignment operator code we again set it numGuests=0. (To overcome drawback of OR operator here)

//Nullish Assignment Operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;
// rest3.numGuests ??= 10;
// console.log(rest1);
// console.log(rest2);
// console.log(rest3);
//Nullish Assignment operator will assign a value to a variable if that exact variable is currently nullish (null or undefined)

//-- AND Operator --

//Here setting owner name to anonymous
// rest1.owner = rest1.owner && "<ANONYMOUS>";
// rest2.owner = rest2.owner && "<ANONYMOUS>";
// console.log(rest1);
// console.log(rest2);
//Short circiting of AND Operator it short circuits when the first value is falsy and returns that falsy value.
//In, rest2.owner = rest2.owner && "<ANONYMOUS>";  Here rest2.owner (first operand) is truthy so AND operator will evaluate next operand or value so that owner name  becomes "<ANONYMOUS>".
//In, rest1.owner = rest1.owner && "<ANONYMOUS>"; Here rest1.owner (first operand) is falsy (i.e, undefined, because rest1.owner doesn't exist) so AND operator will not evaluate next operand or value so that owner name  becomes undefined. To remove that weird behaviour which is creating a owner property which doesn't exist in the rest1 object and assigning a value undefined to it.

//-- Logical AND  Assignment Operator --
rest1.owner &&= "<ANONYMOUS>";
rest2.owner &&= "<ANONYMOUS>";
console.log(rest1);
console.log(rest2);

//If you need to assign a value to a variable that is already defined that has a value currently truthy we can use AND assignment operator there.
