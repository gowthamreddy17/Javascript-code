// ternary operator(conditional operator) which is an alternative for if-else statement, but it is not a replacement.

const age = 19;

// age>=18 ? console.log("cool drink🍸🍹🍷")://same as if
// console.log("water💧");//same as else

const drink = age >= 18 ? "cool drink🍸🍹🍷" : "water 💧";
console.log(drink);

//same example in if statement (it is commplex with more code)
let drink2;
if (age >= 18) {
  drink2 = "cool drink🍸🍹🍷";
} else {
  drink2 = "water💧";
}
console.log(drink2);

//we cannot use if statement inside a template literal
//we can use conditional operator inside a template literal
console.log(`I want ${age >= 18 ? "cool drink🍸🍹🍷" : "water 💧"}`);
