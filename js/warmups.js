"use strict"
console.log("Yay I completed my warm up!")

function fizBuz(){
    for(let i = 1; i <= 20; i++) {
        if ((i % 3 == 0) && (i % 5 == 0) ) {
            console.log("Fizz Buzz");
        }
        else if (i % 3 == 0) {
            console.log("Fizz")
        }
        else if(i % 5 == 0) {
            console.log("Buzz")
        }
        else {
            console.log(i)
        }
    }
}
fizBuz()


//
// function fizBuz(){
//     for(let i = 1; i <= 20; i++) {
//
//         if (i % 3 == 0) {
//             console.log("Fizz")
//         }
//         else if(i % 5 == 0) {
//             console.log("Buzz")
//         }
//         else if ((i % 3 == 0) && (i & 5 == 0)) {
//             console.log("FizzBuzz")
//         }
//         else{
//                 console.log(i)
//             }
//         }
//     }
//
// fizBuz()

for (let x = 1; x <= 20; x++ ){
    var output = "";

    if (x % 3 == 0) {
        output += "fizz";
    }
    if (x % 5 == 0) {
        output += "Buzz"
    }
    if (output ==""){
        output = x;
    }
}
console.log(output);
