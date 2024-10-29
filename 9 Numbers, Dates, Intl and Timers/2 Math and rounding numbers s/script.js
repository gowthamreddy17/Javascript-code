console.log(Math.sqrt(25));
console.log(25 ** (1 / 2)); //Square root
console.log(8 ** (1 / 3)); // cubic root

console.log(Math.max(5, 16, 4, 7, 78, 23));
console.log(Math.max(5, 16, 4, 7, "78", 23));
console.log(Math.max(5, 16, 4, 7, "78px", 23));

console.log(Math.min(5, 16, 4, 7, 78, 23));

console.log(Math.PI);
//10 pixels from UI
console.log(Math.PI * Number.parseFloat("10px") ** 2);

console.log(Math.random());
console.log(Math.trunc(Math.random() * 6) + 1); //dice roll

//To generate random integers between two values

// const randomInt = (min, max) => Math.trunc(Math.random() * (max - min) + min);
const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
//0..1 => 0..(max-min) => min..max
console.log(randomInt(10, 20));

//--Rounding Integers
console.log(Math.trunc(23.933)); //removes decimal part

console.log(Math.round(23.333));
console.log(Math.round(23.933)); //rounds decimal to nearest numbers

// ceil() - the numbers are always rounded upto nerest integer
console.log(Math.ceil(23.333));
console.log(Math.ceil(23.933));

// floor() - the numbers are always rounded down nerest integer
console.log(Math.floor(23.333));
console.log(Math.floor(23.933));

console.log(Math.trunc(23.933));

//floor and trunc() work same way of cutting decimal part. For negative numbers not work same.
console.log(Math.floor(-23.333));
console.log(Math.trunc(-23.333));
//here we can see in above examples trunc() removes decimal part -23, but the floor rounded it to -24. 



//-- Rounding decimals
console.log(2.7.toFixed(0)); //string will be result for tofixed()
//Here we use 'boxing'. Here 2.7 converted to Number object on that object we call methods once operation is finished it will converted back to primitive.
console.log(2.7.toFixed(3));
console.log(+2.7345.toFixed(2)); //string to number




