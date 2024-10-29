"use strict";

//Split - Split allows us to split a string into multiple parts based on a divider string.

console.log("a+very+nice+string".split("+"));
console.log("a+very+nice+string".split("+",2));
//Here string is splitted by '+' sign and store results of elements into an array.
console.log("Sai Gowtham".split(" "));

//Using Destructuring
const [firstName, LastName] = "Sai Gowtham".split(" ");


const newName = ["Mr.", firstName, LastName.toUpperCase()].join(" ");
console.log(newName);
//Here Join method works opposite to split method.
//Join method combines all values from an array like a string while joining we can specify argument as space or some other character to combine all of them. Here we placed space join(' ') that could be also use join('*') or something other character inside it.

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    //(or)
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("sai gowtham");
capitalizeName("ram krishna hari");


//Padding a string - Adding a number of characters to the string until the string has a certain desired length.

const message= 'Go to gate 23';
console.log(message.padStart(20,'+'));
console.log(message.padEnd(35,'+'));
console.log(message.padStart(20,'+').padEnd(35,'+'));
// 7 + 13 + 15. Here 7 '+' printed before string beacuse it contains 20 value at padStartwhere string covers 13 characters. So all becomes 20 here. in padEnd we are having 35 where 20 all ready covered by padStart and string so remaining '+' at end will be 15.

console.log('Gowtham'.padStart(20,'+').padEnd(35,'+'));


//Credit card number masking

const maskCreditCard = function(number){
  const str=String(number);
  // const str=number+''; //type coercion converts entire thing into string here.

  const last=str.slice(-4);
  return last.padStart(str.length,'*'); //Padding the string first part by string.length as argument. Here last 4 digits only displayed and remaining  first part will be padded at starting, until it meets the string.length size.
}

console.log(maskCreditCard(12345678));
console.log(maskCreditCard(123456789099));
console.log(maskCreditCard(456785678890987));


//Repeat() - Allows us to repeat the same string multiple times

const message2= 'Bad Weather... All Depeautures are Delayed...';
console.log(message2.repeat(5));

const planesInLine=function(n){
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
}

planesInLine(5);
planesInLine(2);
planesInLine(10);
