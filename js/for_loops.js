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


    function showmeString(input)
    {
        for (let i = 1; i <= 10; i++)
        {
            for(let j = 1; j <= i; j++)
            {
                console.log(i);
            }
        }
    }


showmeString()

function minusFive(input) {
    for (let i = 100; i >=5; i-=5){
        console.log(i)

    }

}

minusFive()
















}())
