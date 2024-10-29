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



//Creating map with hard coding
const question = new Map([
  ['question', 'what is the best programming language'],
  [1,'C'],
  [2,'Java'],
  [3,'Javascript'],
  ['correct',3],
  [true,'Correct 🎉'],
  [false, 'Try Again!']
]);

console.log(question);
//Creating a  new map directly in the code we can use hard code them without using set method. It is preffered add directly when stating from scratch because it becomes clumpsy or hard when there are alot of values to set with set() method.
//But we can use set() method, When we want to keep adding elements programatically using code.



//Converting Object to Map

console.log(Object.entries(openingHours));
//Here it is returning an array consisting of arrays. It is same as we created a question Map. So we are converting this openingHours object into hoursMap.
const hoursMap=new Map(Object.entries(openingHours));
console.log(hoursMap);


//--- Iteration On Maps
// Iteration on maps are possible because they are iterables.

//Quiz App
console.log(question.get('question'))
for(const [key, value] of question){
  if(typeof key === 'number'){
    console.log(`Answer ${key}:${value}`);
  }
}
// const answer = Number(prompt("Enter the option"));
const answer = 3;
console.log(answer);

//Jonas answer - challenge (To check answer is correct or not using boolean in map as properties)

console.log(question.get(question.get('correct')===answer));


//My answer - cahllenge
if(answer===question.get('correct')) console.log(question.get(true))
else console.log(question.get(false));

//In Objects we need Object.entries() to loop over it because they are not iterables. But we don't need like that in Maps because thet iterables.


//-- Converting Map to Array
const arr = [...question];
console.log(arr);


console.log([...question.keys()]);
console.log([...question.values()]);
// console.log([...question.entries()]);

//Here with only question.keys() and question.values() we get all keys with an map iterator. so that we spread or seperated them into an array with spread operator.

//Other Map Methods that also had in arrays and objects.
// console.log(question.keys())
// console.log(question.values())
// console.log(question.entries())