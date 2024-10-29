// truthy and falsy values

// falsy values are 5 values-----> 0,'',null,undefined,NaN
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean("sai"));
console.log(Boolean(function(){}));
console.log(NaN);

const money = 0;
if (money) {
  //here in this it will be false (money=false) because the if condition JS usess type coercion and converts money (variable) value to a boolean. That worrks because of truthy and falsy values
  console.log("Spend it carefully");
} else {
  console.log("You have to get a job");
}

let height; // height is undefined
if (height) {
  // here that undefined value converted into boolean then it is false in this case(falsy value).
  console.log("height is defined");
} else {
  console.log("height is undefined");
}
