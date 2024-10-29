//All numbers are represented in javascript as floating point numbers
console.log(23 === 23.0);

//Numbers are stored in 64base2 format that means numbers are stored in binary format.
//Base 10 - 0 to 9 : Ex- 1/10=0.1, 3/10=3.33333
//Binary base 2 - 0,1

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);
//javascript can't precise financial calculations because of rounding numbers is not precise here.

//-- string to numbers conversion
console.log(Number('23'));
console.log(+'23'); //When '+' is there type coercion will occur automatically converts all this Numbers.

//Parsing - ParseInt - To read number from string

console.log(Number.parseInt('30px$')); //Here Number method is an object. Here we can use special symbols also javascript will automatically takes number only.
//To make parse int work with alphabets or characters it should start with numbers.

console.log(Number.parseInt('px$30')); //NAN

//ParseInt accepts second argument - Regex (base of numeral system)
console.log(Number.parseInt('30px$', 10));
console.log(Number.parseInt('30px$', 2));

//--ParseFloat -- reads decimal number from string
console.log(Number.parseFloat('2.5rem '));
console.log(Number.parseInt('2.5rem '));

//NaN - To check valu isNaN
console.log(Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X')); //This not a number a letter includes there
console.log(Number.isNaN(20 / 0));
console.log(20 / 0);

//isFinite() - checking a real number ar not (floating points)

console.log(Number.isFinite(23));
console.log(Number.isFinite('23'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

//isInteger - to check real numbers
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));