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

const newt={
    name:'gowtham',
    age:20,
}

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



// --- Looping over objects - object keys, values, entries.

//In previous we iterated arrays which are iterables by using for of loop.
// But we can loop over objects also which are not iterables by using an indirect way.



//-- Iterating over object keys or properties using for of loop

for (const day1 of Object.keys(openingHours)){
    console.log(day1);
}


//Lets see Object.keys() in detail

const properties = Object.keys(openingHours); // returns an array with 3 property names present in openingHours object.
console.log(properties); 

//To check how many properties in an object
console.log(properties.length); //checking length of properties array which is formed by object.keys() 

let openStr = `we are open on ${properties.length} days : `

for(const day of properties){
//    openStr += day;
openStr+=`${day},` //openStr = OpenStr + day
}
console.log(openStr);


//-- Accesing property values with Object.values

const values = Object.values(openingHours); 
console.log(values);
// no need to use for of loop here all openingHours Properties  values, it have objects for each properties - thu:{} fri:{}, sat:{}. so we get these nested objects only when we iterate over the openingHours values.
// so If we have other properties values having rather than objects like strings, numbers then we can use for of loop efficiently.

const value = Object.values(openingHours); 
for(const hello of value){
  console.log(hello);
}

//(Optional - used for understanding without this we can use destructuring for the above example of accessing values)
// here for the newt object we can access property values here by for of loop
for(const value1 of Object.values(newt)){
   console.log(value1);
}




// --- To Loop over entire object - we use entries method

//here entries means, names + values together
// In arrays by using for of loop we already seen entries() method where it returned index and element. 
//Entries works differently Here with objects we need to access properties and values with entries. Here it is not a method that we call on object itself.

const entries = Object.entries(openingHours);
// console.log(entries);

for(const x of entries){
    console.log(x)
}

for(const [day,{open,close}] of entries){
    console.log(`on ${day} we open at ${open} and closes at ${close}`)
}

// Here we are looping over entire object and we destructure the entries array  here, keys  are normal values here but the open and close are inside the object so we need to destructure that object also  to get all the day, open, close values. 
