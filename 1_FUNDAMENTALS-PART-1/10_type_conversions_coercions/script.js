// type conversion
const inputYear="2004";
console.log(Number(inputYear),inputYear);
console.log(Number(inputYear)+18);

console.log(Number('gowtham'));
     // NaN means Not a number(Invalid number)
console.log(typeof NaN);

console.log(String(23),23);

// type coercion - automatical conversion
console.log("I'm " + 19 +" years old");
// in type coercion whenever we use an addition operation performed between a number and string automatically number is converted into a string.
console.log('23'-'13'-3);
// in this subtraction operators works in reverse to plus operator that it converts a string to a number automatically.
console.log('23'+'13'+3);
// here numbers are converted into strings due to plus operator
console.log('23'*3);
console.log('23'/3);
console.log('23'>'18'); //output is true (string converted to number)
// here also strings are converted into numbers


let n='2'+1; // it is '21' a string (due to 2 is string then 1 is also converted into string)
n=n-1;//here due to minus string converted to number n=21-1
console.log(n);//20


let a='23'-10-'2'+'5'; //23-10-2=11 then string '5' added to number 11 then it will further converted to string that is 115
console.log(a); //115

