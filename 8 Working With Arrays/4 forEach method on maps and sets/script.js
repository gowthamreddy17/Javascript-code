"use strict";
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const currencies = new Map([
  ["USD", "United States dollar"],
  ["Eur", "Euro"],
  ["GBP", "Pound sterling"],
]);
//Here the inner arrays are map entries where first one is key and second one is value.

//Map
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//Set
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);

// currenciesUnique.forEach(function (value, key, set) {
currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value}: ${value}`);
});
//Here '_' is a throw away variable.

//----------------------------------------
currenciesUnique.forEach(function (value, key, set) {
  // console.log(`${key}: ${value}`);
});

//Sets don't have keys or indexes. so here key is set to the value to avoid confusion among developers while all the other forEach have three arguments.
