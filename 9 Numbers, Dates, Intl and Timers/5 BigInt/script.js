"use strict";

//Numbers are represnted internally as 64 bits (64 ones or zeros to represent numbers) but in that only 53 bits can be used to actuall digits. The rest of bits stores decimal point and the sign.

//safe number that javascript can represent
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);

console.log(2 ** 53 + 10); //some times this work for unsafe numbers

//BIGINT - new primitive in ES2020
console.log(465785433689853223578765421245665433);
console.log(465785433689853223578765421245665433n);
console.log(BigInt(465785433689853223578765421245665433));

//Operations

console.log(100000n + 100000n);
console.log(46557865744656753523253486666n * 578754535456687686868n);

const huge = 7675697965436466969696857463654n;
const num = 23;
console.log(huge * BigInt(num));

//Exceptions
console.log(20n > 15); //Type coercion occurs
console.log(20n === 20); //regular and bigInt that becomes false different prinitives. strict equality does not make type coercion.

console.log(20n == 20); //Here type coercion occurs
console.log(20n == "20");

console.log(typeof 20n);

//Strings
console.log(huge + " is really BIG");

//Math operations not work here in BigInt
// console.log(Math.sqrt(16n));

//Divisons
console.log(10n/3n); //returns closest BigInt. cut off decimal part
console.log(10/3);