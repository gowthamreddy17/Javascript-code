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

//Short Circuiting - && , ||  operator

//until this point we used logical operators (here - && , ||) operator for combining boolean values only. But we can do more with this operators.

//OR operator returns the first truthy value of all the operands or simply returns the last value if all of them are falsy
// For practical OR operator is used to set default values

//AND operator returns  first falsy value or the last value if all of them are truthy.
//If first value is truthy then next value is returned and if first value is falsy then second value is not be executed. (or) Evaluates and returns the second operand only if the first is truthy.
//For practical AND operator is used to execute code in second operand if first operand is true.

//Properties of Logical operators - "They can use any data type", "Can return any data type", "Short ciruiting or short circuit evaluation"

console.log(3 || "Gowtham");

// Short circuiting - In the case of OR operator, short circuiting means that if the first value is truthy value (true), it will immediately return that first value.
//In case of  OR operator if the first value or operand is truthy then javascript will not evaluate or consider  remaining operands or values.
//Here 3 is truthy value. So it is returned to console irrespective of data type.

console.log("" || "Gowtham");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || "" || "Hello" || 23 || null);
//if one operand is true the OR operator does not look other true values also.
//So that it will simply short circuit and simply returns the result.

//Using ternary operator setting a default value if first value is falsy
// restaurant.numGuests=0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

//With short circuiting setting a default value
let guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log("---AND---");
//In short circuiting AND Operator works opposite to OR operator
console.log(0 && "Gowtham");
//AND operator short circuits when the first value is falsy and returns that falsy value without even evaluating the second operand
console.log(7 && "Gowtham");

console.log("Hello" && 23 && null && "Gowtham");
//In the above null is a falsy value so that it is returned

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
