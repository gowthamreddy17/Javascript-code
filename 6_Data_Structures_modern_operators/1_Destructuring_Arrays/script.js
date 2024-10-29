"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Frienze,Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  order:function(starterIndex,mainIndex){
    return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },
};

// Destrucuring is a Es6 Operator - way of unpacking values from an array or an object into seperate variables. or breaking a complex data structure into a smaller data structure
// In arrays we use Destructuring to retieve elements from the array  and store them into variables easily.

// Without Destructuring array storing array values in variables
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

// With Destructuring array
const [x,y,z]=arr; //here first element in the array is taken as X, second one is Y, Third one is Z.
console.log(x,y,z); 

let [first,second]= restaurant.categories;
const [category1,,category3]= restaurant.categories; //If you want skip an element (suppose second element here) justleave the empty space between the commas.
console.log(category1,category3);
console.log(first,second);


// switching variables without destructuring using temp
// const temp=first;
// first =second;
// second=temp;
// console.log(first,second);

// To switch variable with destructuring without temp
[second,first]=[first,second]  //we are not using let or const here because we are reassigning the values here
console.log(first,second);



console.log(restaurant.order(2,0));
// destructing array values returned from an function or receving multiple values from a function
const[starter, main]=restaurant.order(2,0);
console.log(starter,main);


// Nested array destructuring
const nested =[2,4,[5,6]];
const[i,,j]=nested;
console.log(i,j);
// Destrucring inside destructuring to get nested array values
const [p,,[q,r]]=nested;
console.log(p,q,r);


// Default Values - useful when get data from an api
// const [t,u,v]=[8,9]; //here 'v' is undefined
const [t=1,u=1,v=1]=[8,9];//here we are assigning default values. so 'v' becomes 1 instead of undefined
console.log(t,u,v);
