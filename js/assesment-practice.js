"use strict"

// function checkForNumber(input) {
//     if (typeof input === "number") {
//         return "number";
//     } else {
//       return  "not a number"
//     }
// }
//
// console.log(checkForNumber(3));
//
// function evenOrOdd(input) {
//     if (input % 2 === 0) {
//         return "even";
//     } else {
//         return "odd";
//     }
// }
//
// console.log(evenOrOdd(6));
//
//
//
// function doubleTheElements(arr) {
//     let double = [];
//     for(let i=0; i < arr.length; i++ ) {
//         double.push(arr[i] * 2)         /// i stands for indexof also, not just iteration
//
//     }
//     return double
// }
//
// console.log(doubleTheElements([7, 8, 9, 10]));



const companies= [
    {name: "company one", category: "finance", start: 1981, end: 2003},
    {name: "company two", category: "retail", start: 1992, end: 2008},
    {name: "company three", category: "auto", start: 1999, end: 2007},
    {name: "company four", category: "retail", start: 1989, end: 2010},
    {name: "company five", category: "technology", start: 2009, end: 2014},
    {name: "company six", category: "finance", start: 1987, end: 2010},
    {name: "company seven", category: "auto", start: 1986, end: 2096},
    {name: "company eight", category: "technology", start: 2011, end: 2016},
    {name: "company nine", category: "finance", start: 1981, end: 2089},
    {name: "company ten", category: "auto", start: 1984, end: 2003},
    {name: "company eleven", category: "retail", start: 1978, end: 2003},
];

const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];





    //
    // companies.forEach(function(random){
    //     console.log(random);
    // })
    //



let canDrink =[];
for(let i = 0; i < ages.length; i++) {
    if(ages[i] >= 21) {
        canDrink.push(ages[i]);
    }
}
console.log(canDrink);

function mostColorful(hamsters) {
    let mostColors = {fur : []};
    for (let hamster of hamsters) {
        if (hamster.fur.length > mostColors.fur.length) {
            mostColors = hamster;
        }
    }
    return mostColors;
}


function nameAndCategory(companies){
    let categoRy = {category:[]};
    for (let categ of companies) {
        if (categ.category === "auto") {
            categoRy = categ;
        }
    }
    return categoRy
    }
    console.log(nameAndCategory(companies));


//     companies.forEach();
//     if(companies.includes("auto"));
//     return {
//         category: "category"
//         // category: category,
// }


// console.log(nameAndCategory("companies"));

// var count = 0;
// var max = 5;
// var interval = 1500; // interval time in milliseconds
//
// var intervalId = setInterval(function () {
//     if(count >= max) {
//         clearInterval(intervalId);
//         console.log('All done');
//     } else {
//         count++;
//         console.log('Repeating this line ' + count);
//     }
// }, interval);
//




var delay = 4000; // delay time in milliseconds

var timeoutId = setTimeout(function () {
    alert('Here is a delayed hello!');
}, delay);
clearTimeout(timeoutId)


// to cancel the timeout, you can call
// clearTimeout(timeoutId);
// prior to the delay expiring















