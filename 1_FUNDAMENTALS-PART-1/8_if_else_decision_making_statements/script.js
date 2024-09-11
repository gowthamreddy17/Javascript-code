const age=16;
//const isOldEnough= age>=18;

// if(isOldEnough){
//    console.log("You will get drivers license 🚗");
// }
if(age>=18){
   console.log("You will get drivers license 🚗");
}
else{
   let yearsLeft=18-age;
   console.log(`You are too young  wait for another ${yearsLeft} years 🙂`);
}

const birthCentury=2004;
let century;
if(birthCentury<=2000){
   century=20;
}
else{
   century=21;
}
console.log(century);



let num=Number(prompt("enter a number"));
if(num>0){
   console.log("positive");
}
else if(num==0){
   console.log("zero");
}
else{
   console.log("negative");
}
