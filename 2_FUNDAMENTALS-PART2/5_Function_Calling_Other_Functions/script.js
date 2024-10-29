"use strict";

function fruitPieces(fruit){
    return fruit*4
}


function fruitProcessor(apples,oranges){ //here apples, oranges are parameters
    const applePieces=fruitPieces(apples);
    const orangePieces=fruitPieces(oranges);
    const juice=`Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
    return juice;     //returning juice value from function
}

console.log(fruitProcessor(2,3));