"use strict";

const airline = "TAP Air Portugal";
// const plane = "A320";

//Upper and lower case conversion of a string
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fixing Capitilization in a name
const passenger = "GoWthAM";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);
//Here we have given a string With upper and lower mix capitalizations.
//First all of that converted into lower case and stored in passengerLower variable.
//Finally we extracted first character of passengerLower and coverteed that character to upper case. Then added or concatenated, passengerLower with slicing the string by removing first element and starting from first index.


// Function for Fixing Capitilization in a name
const fixNameCapital = function (pName) {
  const pNameLower = pName.toLowerCase();
  const pNameCorrect = pNameLower[0].toUpperCase() + pNameLower.slice(1);
  console.log(pNameCorrect);
};

fixNameCapital("GoWtHaM");





//Comparing emails
const email = 'sai@gmail.com';
const loginEmail = ' Sai@Gmail.com\n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail=loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email===normalizedEmail);
//trim() is used to remove white spaces.
//The trim() method in JavaScript is a string method that removes whitespace from both ends of a string. Whitespace includes spaces, tabs, and line breaks. It does not affect the whitespace between characters within the string.


//Replacing part of a string

const priceGB = '288, 97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to boarding door 23. Boarding door 23';
console.log(announcement.replace('door','gate'));
console.log(announcement.replaceAll('door','gate')); //To replace all occurences


//Using regular expressions
console.log(announcement.replace(/door/g,'gate'));

//Here g means global which targets all occurences. /door/ slashes are used to represent regular expression.


//Some String methods returns - Booleans 
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));//Checks whether a substring exist in string and returns a boolean value as result.
console.log(plane.includes('A320',5)); //Starting search from particular position.
console.log(plane.includes('Boieng'));
console.log(plane.startsWith("Air"));
console.log(plane.startsWith("A320",7));
console.log(plane.endsWith("neo"));
console.log(plane.endsWith("neo",14));

if(plane.startsWith('Airbus')&&plane.endsWith('neo')){
  console.log('Part of New Airbus family');
}


//Practice exercise
const checkBaggage = function(item){
  const baggage = item.toLowerCase();

  if(baggage.includes('knife')|| baggage.includes('gun')){
    console.log('You are not allowed!');
  }
  else{
    console.log('Welcome!');
  }
}

checkBaggage('I have a laptop and a pocket Knife');
checkBaggage('I have socks and camera');
checkBaggage('Got some snacks and gun for protection');



