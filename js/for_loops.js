"use strict";
(function() {

function showMultiplicationTable(num){
    for (let i= 1; i < 11; i++) {
        console.log (num+" X "+i+" = "+(i*num))
    }
}
    showMultiplicationTable(7)

let randomN=Math.floor(Math.random()*201)+20

function showRandomNumbers(randomN){
    for (let i= 0; i < 10; i++) {
        randomN=Math.floor(Math.random()*201)+20;
        if (randomN % 2 === 0) {
            console.log(randomN + "even");
        } else{
        console.log(randomN + " odd");
    }
}}

showRandomNumbers()


    function showmeString(numb){
    for (let i= 0; i < 10; i++) {
        console.log(numb);
        break;
    }
    for (let i= 0; i < 10; i++) {
        console.log(numb + i + (numb + i).toString());
        break;
    }
for (let i=0; i <10; i++) {
    console.log(numb + i +(numb +i).toString()+ (numb + i).toString())
}
    }

showmeString(1)






















}())
