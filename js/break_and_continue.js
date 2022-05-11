"use strict";

(function() {

    let Num = prompt("pick an odd number from 1-50 ");

function pickNumber(Num) {
    for (let i = 1; i < 50; i += 2 ) {

        if (i == Num)  {
            console.log("skipping " + Num);
            continue;
        } else if    ( Num % 2 === 1)   {
            console.log("here is an odd number " + i);
        } else if (Num % 2 === 0 && Num <= 1 && Num >= 50) {
            break;
        }
    }

//     for (let j = 1; j <= 50; j += 2) {//this only looks at odd numbers!!
//         if (j == Num) {
//             console.log("skipping " + Num);
//             continue;
//         }
//         console.log(j + " is odd")
//     }
}

pickNumber(Num)

//

//
//     let userNum = prompt("Give me an odd number between 1 and 50, please.");
//
//     while (true) {
//         if (userNum % 2 !== 0 && userNum >= 1 && userNum <= 50) {
//             break;
//         }
//     }
// //
//
//     for(let j = 1; j <= 50; j += 2) {
//         if (j == userNum) {
//             console.log("Skipping " + userNum);
//             continue;
//         }
//         console.log(j+ " is odd")
//     }












}())
