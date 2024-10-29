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

// Rest pattern is also looks like spread operator (same syntax) but it works opposite to spread operator depending upon where they are used.

//Spread operator is used where we would write values seperated by a comma otherwise write values seperated by comma whereas rest pattern is used where would other wise write variable names seperated by commas and not values seperated by commas.

// Rest Pattern - Packs the elments into an array. "It basically collects the elements that are unused in the destructuring assignment".



// Spread operator - unpacks elments from an array. (To expand array into individual elments)  we use spread operator to build new arrays or pass multiple values into a function


// 1) Destructuring 

//Rest Patterns are used in destructuring


//SPREAD, because on RIGHT side of '='
const arr=[1,2, ...[3,4]];
console.log(arr);
console.log(...arr);

//REST, because on LEFT side of '='
const [a,b,...others]=[1,2,3,4,5];
console.log(a,b,others);



const [pizza, , risotto, ...otherFood]=[...restaurant.mainMenu, ...restaurant.starterMenu];
// Here in above example the skipped elemnts is not considered. The rest of the elements after last variable we used they only included. So Rest pattern is always be last element in destructuring assignment then only javascript know rest of the array.
// there must be only one rest pattern in destructuring assignment because it is the last element in destrucuring and collects rest of all elements.

console.log(pizza, risotto);
console.log(otherFood);

//***   Objects ***

// Here the remaining elements collected into a new object not into an array.

const {sat, ...weekdays}=restaurant.openingHours;
console.log(sat);
console.log(weekdays);



// 2) Functions

//Rest Parameters are used in functions


// In spread operator we used to pass array elements as individual elements into the function as arguments

//The rest operator does opposite, it pass individual elements as an array into the function.

//Here we are taking this 'add' function which accepts multiple parameters or any arbitary amount of parameters and adds them and finally returns the sum of all values.

// For this case we use Rest Parameters here to pass arbitary amount of parameters then they are packed into array. Here rest parameters accepts array elements as individual elements (by using spread operator we must unpack them) and normal individual elements.

const add=function(...numbers){
 let sum=0;
 for(let i=0;i<numbers.length;i++){
    sum+=numbers[i];
 }
 console.log(sum);
 //console.log(numbers);
};

add(2,3);
add(2,3,5);
add(2,4,7,1,6,9,5,4);
// Here the rest syntax which takes multiple values and then packs into an array and passes into the function and then sum logic is used




//Here we are taking array 'x' which contains array of elements. Then we need to pass into function we are using spread operator to pass individual elements not an array (because rest is used in function)

const x=[23,5,7];
add(...x);

// we are are taking all the numbers of array and spreading in the add(...x) this same as add(23,5,7)



// Using Rest parameters practically in our restaurant object in orderPizza() function

restaurant.orderPizza('flour','mushrooms','onion', 'cheese', 'olives');
// Here the flour becomes the mainIngredient rest of the elements are rest parameters stored in otherIngredients as an array (because rest operator packs individaul elements into an array)


//When we pass only one parameter that will be stored in mainIngedient and otherIngredients must be an empty array [] 
restaurant.orderPizza('mushrooms');