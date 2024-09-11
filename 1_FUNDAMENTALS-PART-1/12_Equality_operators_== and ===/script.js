const age='18';
if(age===18){
     console.log("you just became an adult (strict)");
}
if(age==18){
    console.log("you just became an adult (loose)");
}

//strict equality is used more to reduce bugs in code


//const favourite=prompt("Enter number"); 
// it is accepting number as string and with loose equality type coercion occur and converted further it increases the bugs
const favourite=Number(prompt("Enter number"));
console.log(favourite);
console.log(typeof favourite);

if(favourite === 123){
    console.log("yes it is 123")
}else if(favourite===45){
    console.log("it is 45")
}
else{
    console.log("it is neither 123 nor 45")
}



if(favourite !== 23)console.log("why not 23?")