// there are 7 datatypes in javascript
// Number - used for decimals and integers let age =23;
// String- let myCurrentJob="enginneer";
// Boolean - true or false let fullAge=true;
// Undefined - the value of variable is not yet not defined(empty value)    let children; 
// Null- It is also empty value
// Symbol-value that is unique and cannot be changed
// BigInt- Larger integer values that can hold
// Javascript has dynamic typing - we need not to declare datatype they are automatically defined
// we can assign same variable for different datatypes in one code itself.
let javascriptIsFun=true;
console.log(javascriptIsFun);

// type of
console.log( typeof javascriptIsFun);

// console.log(typeof true);
// console.log(typeof 1000);
// console.log(typeof 'sai');

// dynamic conversion
javascriptIsFun='yeah'
console.log(typeof javascriptIsFun);//changed to string

let year;
console.log(typeof year);
year=2023;
console.log(typeof year);

console.log(typeof null);//this is a bug