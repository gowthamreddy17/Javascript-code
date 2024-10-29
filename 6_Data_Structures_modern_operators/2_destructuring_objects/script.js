"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Frienze,Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours:{
     thu:{
        open:12,
        close:22,
     },
     fri:{
        open:11,
        close:23,
     },
     sat:{
        open:0,
        close:24,  //Opens 24 hours
     },
  },

  order:function(starterIndex,mainIndex){
    return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },

//   orderDelivery(obj){
//    console.log(obj);
//   }
  orderDelivery:function({starterIndex=1,mainIndex,time='8:00',address}){
   console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },//Only passed in one object or one argument here into function but we did not passed four arguments here. As we recieve that we immediately destructuring. so we used the property names in the object {properties} as argument where properties bot be in order while destructuring.
};



//  **** Destructuring objects***

// **Just like arrays we use destructuring but here with curly braces and order doesn't matters here to retrieve elements. but in arrays order matters more
const {name,openingHours,categories} = restaurant;  //Here we need to use same property names which is defined in the object
console.log(name,openingHours,categories);

// This destructuring objects will be helpful when we do an API call from other web application where get the data in form of objects (weather data, movie data etc...)


// **To change property names to variables in destructuring
const { name:restaurantName, openingHours:hours, categories:tags,}=restaurant;
console.log(restaurantName,hours,tags);

// **Setting default values -----      helpful when we are trying to access property that does not exist
const{menu=[], starterMenu:starter=[]}=restaurant;
console.log(menu,starter); 
//Here above, we are giving menu and starter menu default empty array if no property exists on that name. and we can change property name here also in this.


// **Swapping variables  or Mutating variables
// Over riding variables with object properties
let a=11;
let b=99;
const obj={a:23, b:7, c:14};
({a,b}=obj);  //Here paranthesis needed that when put only curly braces javascript thinks that a code block assigning to a varaiable
console.log(a,b); //Here object properties  overides the normal variables

// Nested Objects
const {fri:{open:o,close:c}}=openingHours; //Opening hours already declared as variable by destructuring so we acan access directly here
console.log(o,c); //Here o and c are variables for the properties of open and close in fri object


// **Function that takes object as parameter where that object contains multiple parameters. so we get the order of parameters very easily and we don't need to manually pass all arguments to function in an order ( object doesn't require order to access properties whereas arrays required)
restaurant.orderDelivery({
   time:'11:30',
   address:'Nellore, AndhraPradesh',
   mainIndex:2,
   starterIndex:2,
});


// Using Default Values when proprties doesn't exist
restaurant.orderDelivery({
   address:'Nellore, AndhraPradesh',
   mainIndex:1,
});//Here starter index and time values will be default because that properties doesn't exist in this function call