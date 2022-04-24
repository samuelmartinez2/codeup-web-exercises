"use strict";
(function(){


    //
    // let oddNumber=prompt(" gime me an add number")
    // while ( oddNumber  % 2 !== 0 && oddNumber >= 1 &&  oddNumber <=50) {
    //         break;
    //         }
    //         console.log( oddNumber + " is an odd number");



// why does parseFloat make it read the number???

    let userNum = prompt("Give me an odd number between 1 and 50, please.");

    while (true) {
        if (userNum % 2 !== 0 && userNum >= 1 && userNum <= 50) {
            break;
        }
    }


    for(let j = 1; j <= 50; j += 2) {
        if (j == userNum) {
            console.log("Skipping " + userNum);
            continue;
        }
        console.log(j+ " is odd")
    }










}())