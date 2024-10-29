"use strict";

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";


const getC = str => str.slice(0,3).toUpperCase();

for(const flight of flights.split('+')){
  const[type,from,to,time]=flight.split(';');
  const output=` ${type.startsWith('_Delayed')?'🔴':''}${type.replaceAll('_',' ')} from ${getC(from)} to ${getC(to)} (${time.replace(':','h')})`.padStart(45,' ');
  console.log(output);
}

//Here  flights.split('+') returns an array we are looping over it.
// In second line we are destructuring another array formed by flight.split(';') in each iteration.
//In output If the word starts with _Delayed it returns true or false there,  then used a condition to place '🔴' if it is true. And also replaced all undescores with space.
//Then we called getC function where it slices the string (there first 3 characters - 0,1,2 indexes) and after converts that to uppercase sa,e with 'to' also.
//With time we replaced ':' with 'h'. Then over entire string we applied padStart to give spaces before string so that they are aligned same line at end (In this case, they will same string length by adding empty spaces)