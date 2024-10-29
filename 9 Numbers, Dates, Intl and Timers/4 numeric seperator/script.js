"use strict";

//287,774,600,-----
const diameter = 877460000000;
console.log(diameter);

//numeric seperators - these under scores will be ignored by javascript engine.
const diameter1 = 877_460_000_000;
console.log(diameter1);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;
console.log(transferFee1);
console.log(transferFee2);

const PI = 3.14_15;
console.log(PI);

console.log(Number("230000"));
console.log(Number("230_000")); //In this case numeric seprator not work when converting string to number
console.log(Number.parseInt("230_000")); 

