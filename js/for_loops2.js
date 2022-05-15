"use strict";
(function(){



//
// let i = 10;
// do{
//     console.log (i);
//     i++;
// }
// while (i < 10);


// for (let i = 0; i < 10; i+=3) {
//     console.log (i)
// }



    // for (let i = 0, j = 9; i < 10 && j > 7; i++, j--) {
    //     console.log('for loop iteration #' + i + ', j = ' + j);
    // }
    //


    // function showMultiplicationTable(num) {
    //     let i = 0
    //     while (i < 10) {
//     //
//     //     console.log(num + " x " + ++i + " = " + num*i);
//
//
//
//     }}
//
//
// showMultiplicationTable(7)


    //
    // for (let i = 0; i < 10; i++) {
    //     let randomNumber = Math.floor(Math.random()*181)+20
    //    if (randomNumber % 2 === 0) { console.log(randomNumber + " is even")
    // } else {
    //        console.log(randomNumber + " is odd")
    //    }}
    //
    //

    //
    // for (let i = 0;  i ,10; i++) {
    //
    // }





        for (let i = 0; i < 10; i++) {
            let string= "";
             for(let j =0; j < i; j++)
             {
                string += i;
            }
                console.log(string);

        }
// I still dont understand the logic on this!!!!!!!
    function numberPyramid()
    {
        for (let x =1; x < 10; x++){
            console.log(x.toString().repeat(x))
        }
    }
    numberPyramid()


for (let i =100; i >= 5; i-=5) {
    console.log(i)
}



}())