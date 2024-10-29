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





//Before Es6 we are having only basic data structures that are inbuilt in the javascript. After Es6 we are introduced two more data structures They are sets and maps.


//----- Sets : A set is basically just a collection of unique values it doesn't have any duplicate values. 
//Set can hold mixed type of datatypes.
//Set gives result as same look like an array so that sets are also iterables just like an array.
//But set is  completely  different from an array. Because  elements in sets are unique and order of elements in sets are irrelevant or not in order.
//In sets there will be no indexes for values because of unordered values. So there will be no way to getting value from the set.
//There will be no need of getting data out of a set because all values are unique and their order doesn't matter so there will be no use of retrieving values from a set.
//if we need to actually store and retrieve values in order we use arrays instead of sets.


const orderSet=new Set(['pizza', 'pasta', 'biryani', 'pizza', 'pasta', 'noodles']);

console.log(orderSet);


console.log(new Set('Gowtham'));
//Strings are also iterables so that we get each letter of the string here within a set.


console.log(orderSet.size);
//Here size method in sets is to check the size of an set which contains unique values. 
//But arrays we use length method which contains duplicate values also.

console.log(orderSet.has('pizza'));
console.log(orderSet.has('bread'));

//Here this 'has()' method in sets checks the value present in the set or not. if present returns true otherwise false.
//This is similar to 'includes()' method in arrays.

orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
console.log(orderSet);
// To add values into Sets we use 'add()' method. When we tried to add same value multiple in a set  it is get added once only.

orderSet.delete('noodles');
console.log(orderSet);
//To delete  a value in Sets we use delete()' method.

// orderSet.clear();
// console.log(orderSet);
//To delete  all the values in Set we use clear()' method.


for(const order of orderSet) console.log(order);
//Here sets are iterables so we get all value from the set seperately by looping over it like we do in arrays.


// Real world Example:

const staff=['waiter','manager','chef', 'waiter', 'chef'];
const staffUnique=new Set(staff);
console.log(staffUnique);
//Here we created an array with duplicates and the created a set and then added array into which is an iterable. So the result will be unique now.

// we can use spread operator in sets also. Because  spread operator works on iterables where set is also an iterable.
const staffUnique1=[...new Set(staff)];
console.log(staffUnique1);
//Here the spread operator works in sets as same like arrays.In this case which unpacks the values from set into comma seperated values and gets into the array.

//To know unique roles or values
console.log(new Set(staff).size);


//Conclusion:
//Sets are not intended to replace arrays at all. 
//Whenever we we need to store the values in order and that might contain duplicates we use arrays. Arrays also helpful to manipulate data well with array methods.
//Sets are unique and they are easy to interact by using totheir straight forward methods.
//However arrays are important than sets. Use sets when you need unique values otherwise use arrays.