// math or arthimetic operators
const now = 2037;
const ageJonas = now - 1991;
const ageJohn = now - 2004;
console.log(ageJonas, ageJohn);

console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);
// 2**3 means two raise to the power 3 it is a exponent

const firstName = "sai";
const lastName = "gowtham";
console.log(firstName + " " + lastName);
let i = 10;
i++;
console.log(i);
i--;
console.log(i);

// assignment operators
let x = 10 + 5;
console.log(x);
x += 10; //x=x+10;
console.log(x);
x *= 4; //x=x*1
console.log(x);

// comparision operators
console.log(ageJonas > ageJohn);
console.log(ageJohn >= 18);

const isFullAge = ageJonas >= 18;
console.log(isFullAge);
console.log(now - 1991 > now - 2004);
// operators have precedence also