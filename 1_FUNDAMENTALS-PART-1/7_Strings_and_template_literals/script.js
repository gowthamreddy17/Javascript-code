const firstName='Gowtham';
const job='student';
const birthYear=2004;
const currentYear=2023;

const mySelf="I'm "+firstName+", a "+(currentYear-birthYear)+" year old "+job+"!";
console.log(mySelf);

// to do the same thing as  like above we use template literals with ES6 in easy way

const newMySelf=`I'm ${firstName} a ${currentYear-birthYear} year old ${job} !`;
console.log(newMySelf);

console.log("This \n\
is a \n\
multi line string"); //before ES6

console.log(`This 
is a
multi line string`); //after ES6 using template literals

