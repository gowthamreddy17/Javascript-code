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





//Looping Arrays --- The For-Of Loop (Introduced in ES6)

const menu=[...restaurant.starterMenu, ...restaurant.mainMenu];

//With regular or normal FOR Loop we need to iterate over the entire array manually by setting a condition, setting and updating counter (for array index values incrementation) each time to retrieve all data from an array. 
//But in For-Of Loop we dont need any condition or an counter.
//In For-of Loop also we can use continue and break and statements

//------ For-Of Loop
for(const item of menu) console.log(item);

//Iterates over each value of the array and stores in a variable.
//Here the item variable is the current element in each iteration.


//-- To get index values with For-Of Loop
for(const item of menu.entries()){
    console.log(item);
}

//Printing in an order using template literal
for(const [i,el] of menu.entries()){
    // console.log(`${item[0]+1}:${item[1]}`);  //{item[0]+1} - 0+1=1 and item[1] - Focaccia. Here the the iteration goes over entire array
    //The above way is older. But now we use destructuring here (below) to make it is easier.
    console.log(`${i+1}:${el}`);
}

//The For-of Loop is mainly used for to get current element. If we want to get the index of value also we use "entries()" method (which is an Array method).

// console.log(menu.entries()); //returns - Array Iterator
//console.log(menu.entries());

