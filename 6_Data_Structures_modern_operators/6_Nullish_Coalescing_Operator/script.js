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

    orderPizza:function(mainIngredient, ...otherIngredients){
      console.log(mainIngredient);
      console.log(otherIngredients);
    },
  };




restaurant.numGuests=0;
//With short circuiting setting a default value
let guests2 =restaurant.numGuests||10;
console.log(guests2);
//Here restaurant.numGuests=0. Here 0 is considered as falsy value so 'or operator' will take default value 10 here which is truthy. 
//So we use  Nullish Coalescing Operator to overcome this drawback and it considers '0' as a value and not falsy.



//Nullish Coalescing Operator - Introduced in ES 2020. It works with concept of nullish values instead of falsy values
//Nullish: null and undefined are falsy here(doesn't include 0 or ''). Here 0 and '' are not falsy values. (In nullish case)
//Here 0 and '' are non nullish values
//When only the first expression or operand value is null or undefined then only the second expression or operand evaluated otherwise first expression value is returned.
let guestCorrect = restaurant.numGuests??10;
console.log(guestCorrect);
