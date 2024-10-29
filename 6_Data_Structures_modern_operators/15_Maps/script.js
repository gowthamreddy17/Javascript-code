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

//--- Maps: A map is a data structure that we can use to map values to keys.
//So just like in objects data is stored in key value pairs in maps.
//But the big  difference between objects and maps are, In maps the keys can be any type (could be objects,arrays, other maps).But in object keys should be always a string only.
//Maps are lot more useful than sets.


const rest=new Map();
rest.set('Name', 'Pizza hut');
rest.set(1,'Hyderabad, India');
//Here set() method in maps adds a new element to the map data structure
console.log(rest.set(2,'Delhi, India'));
//Calling the set() method here updates  the value and also returns the entire map.
//Here set method returns the updated map.


//---Chaining 

rest.set('categories',  ["Italian", "Pizzeria", "Vegetarian", "Organic"]).set('open',11).set('close',23).set(true,'we are open :)').set(false,'we are closed:(');

//Here set method returns the updated map.
//Here the first set() method becomes updated in map. so we can call set() method second time on that updated map or we can chain this set() as many times we want but finally we  returned by fully updated map. 
console.log(rest);

//Reading data from a map - get()
console.log(rest.get('Name'));
console.log(rest.get(1));
console.log(rest.get(true));
//Here we get the value which the key is mapped.
//While retieving the data type of key matters. for example in this case we should use 'Name' as string but not Name as variable. Also 1 as number but not as sting like '1'. 
//If we the datatype or name of the key changes then undefined will be returned.


const time = 8;
console.log(rest.get(time>rest.get('open') && time<rest.get('close')));
// Checking the time is between 11 and 23 or not.
//Here, time>rest.get('open') && time<rest.get('close') this entire expression return true or false. Then rest.get() have true or false value in it. According to that key true or false mapped to that value in the map.


//-- Methods in maps

//To check a property in map exist or not
console.log(rest.has('categories'));
//To delete a property in map with key
rest.delete(2);
console.log(rest);

//To check size of map
console.log(rest.size);

//To clear delete entire values and keys in map
// rest.clear();



//We can use arrays or objects or dom elements as map keys


// rest.set([1,2], 'Test');
//console.log(rest.get[1,2]);
//Here with this we cannot retrieve the values like this. because the two arrays here are different. (one is mapping the key, another using console are different). These are have same elements of array but they are not the same object heap.
//So we have to use array as a key as shown below
const arr =[1,2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

rest.set(document.querySelector('p'), 'Paragraph')
//Here we can map the dom elements as keys in the map.
