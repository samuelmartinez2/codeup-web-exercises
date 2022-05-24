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


let auTo = []
for (let i =0; i < companies.length; i++) {
    if (companies[i].category === "technology") {
        auTo.push(companies[i].name);
    }
}
console.log(auTo);


function oldestStart(companies) {
    let oldest = companies[0].start;             ///<<<give it a an item from the array to start with>>>>>////
    for( let i=0; i<companies.length; i++) {
        if (companies[i].start < oldest) {
        oldest= companies[i].start;
        }
    }
    return oldest;
}

console.log(oldestStart(companies));
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
    let categoRy =[];
    for (let categ of companies) {
        if (categ.category === "auto") {
            categoRy.push(categ.name);
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




function doubleElements(inputs) {
    let doubles = [];
    for(let i = 0; i < inputs.length; i++) {
        doubles.push(inputs[i] * 2)
    }

        return doubles;

}


console.log(doubleElements([2, 3, 5]));



//********* this is the results and my practice from the firsts assessment**************//



//
// // function checkForNumber(input){
// //     if (typeof input  == "number"){
// //     return "number";
// //     }
// //     else  {
// //         return "not a number";
// //     }
// // }
// //
// // function evenOrOdd(input){
// //     if (input  %2 === 0){
// //         return "even";
// //     }
// //     else  {
// //         return "odd";
// //     }
// // }
// //
// // function doubleTheElements(object){
// // if ([1,2,3]) {
// //     return [2, 4, 6]}
// // else if ([1, 1, 4, 6, 5]){
// //     return [2,2,8,12,10]
// // }
// //
// // }
// //
// //
// // function sumOfElements(elements){
// //     let sum = 0
// //     for (let i=0; i< elements.length; i++) {
// //         sum += elements[i];
// //     }
// //     return sum;
// // }
// //
// //
// //  let product1 = {
// //      name: "tomatoes",
// //      price: 4
// //  }
// //  let product2 = {
// //      name: "potatoes",
// //      price: 6
// //  }
// //
// //  let product3 ={
// //      name: "wine",
// //      price: 16
// //
// //  }
// //
// //  function totalPrice(product) {
// //
// //      return {
// //          price: product.price
// //      }
// //  }
// //      let products = [product1, product2, product3];
// //
// //      function returnpriceofproducts(products) {
// //          let productprice = [];
// //          products.forEach(function(product) {
// //              productprice.push(returnpriceofproducts(product));
// //          });
// //          return productprice;
// //      }
// //
// //
// // console.log(totalPrice(products));
// //
// //      function findHighestPrice(arr){
// //
// //          let highest = {price: 0};
// //          for (let cost of product) {
// //              if (cost.price > highest.price) {
// //                  highest = product;
// //              }
// //          }
// //          return highest;
// //      }
// //

// *******the following one is wrong*************
// // function returnTheHighesprice(arr) {
// //     let highest = arr[0];
// //     for (let i = 1; i < arr.length; i++) {
// //         if (arr[i].price > cost.price) {
// //             highest = arr[i];
// //         }
// //     }
// //     return highest;
// // }
//

// **********this one is correct************
function returnTheHighesprice(arr) {
    let highest = [0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].price > highest) {
            highest = arr[i].price;
        }
    }
    return highest;
}







// // !!!!this is where the warm up start!!!!
//
// function checkForNumber(input) {
//     if (typeof input === "number")
//     {
//         return "number";
//     } else {
//         return "not a number"
//     }
// }
//
// function evenOrOdd(number) {
//     if (number % 2 === 0) {
//         return "even";
//     } else {
//         return "odd";
//     }
// }
//
// function doubleTheElements(arr) {
//     let double = [];
//     for (let x of arr) {
//         double.push(x * 2);
//     }
//     return double;
// }
//
// // function doubleTheElements(obj) {
// //     return obj.map(x => x*2);
// // }
//
//
// function sumOfElements(arr) {
//     let bucket = 0;
//     arr.forEach(function(num) {
//         bucket += num;
//     })
//     return bucket;
// }
//
//
// function totalPrice(arr) {
//     let total = 0;
//     for (let i =0; i < arr.length; i ++) {
//         total += arr[i].price;
//     }
//     return total;
// }
//
// function findHighestPrice(arr) {
//     let bucket = 0;
//     for (let product of arr) {
//         if (product.price > bucket) {
//             bucket = product.price;
//         }
//     }
//     return bucket;
// }
//
// function discountCheck(input) {
//     if (input.clubMember === true || totalPrice(input.items) >= 150){
//         return true;
// } else {
//         return false;
//     }
// }
//
// function newProduct(name, price) {
//     return {
//         name: name,  // seperated by commas for multiple objects
//         price: price
//     }
// }
//
// function countWords(str) {
//     if (str === "") {
//         return 0;
//     } else {
//         let words = str.split(" ");
//         return words.length;
//     }
// }
//
// // function countWords(str) {
// //     let words = str.split(' ');
// //     return words.length;
// // }
//
//
// function describeNumber(number) {
//     if (!isNaN(parseFloat(number))) {
//         let obj = {};
//         obj.value = parseFloat(number);
//         obj.evenOrOdd = evenOrOdd(number);
//         obj.numberOfDigits = number.toString().length;
//     return obj;
//     }
// }
//
// // function screamingSnakeCase(string) {
// //     let upperCaseStr = str.toUpperCase();
// //     let array = upperCaseStr.split("");
// //     let finalStr = array.join("_");
// //     return finalStr;
// // }
//
// function screamingSnakeCase(string) {
//     return string.toUpperCase().split(" ").join("_")
// }


// Write a function named `checkForNumber` that accepts an argument and returns a string `'number'` or `"not a number"`
// based on whether the input is a number.





function checkForNumber(input) {
    if (typeof input === 'number') {
        return 'number'
    }else {
        return  'not a number';
    }
}

// Write a function named `evenOrOdd` that returns the string `"even"` or `"odd"` when passed a numeric argument. The
// resulting string should represent whether the number is even or odd.

function  evenOrOdd(input) {
    if (input%2 === 0 ) {
        return "even"
    }else {
        return "odd"
    }
}

// Write a function named `doubleTheElements` that accepts an array of numbers and returns an array with double the
// value of each number.

function doubleTheElements(input) {
    let double = [];
    for( let i=0; i < input.length; i++) {
        double.push(input[i]*2)
    }
    return double
}


// Write a function named `sumOfElements` that accepts an array of numbers and returns the sum of those numbers.

function sumOfElements(input) {
    let sum1 = 0;
    for(let i=0; i <input.length; i++) {
        sum1 += input[i];
    }

    return sum1
}

console.log(sumOfElements([9, 3]));


// Write a function named `totalPrice` that accepts an array of objects where each object represents a product from a
// store, that has a `price` property. The function should return the total of every object's `price` property.



function totalPrice(input) {
    let total = 0;
    for ( let i=0; i < input.length; i++) {
        total += (input[i].price)
    }
    return total;
}


// Write a function named `findHighestPrice` that accepts an array of objects where each object represents a product
// from a store, that has a `price` property. The function should return the highest price value from the array. `findHighestPrice`.

function findHighestPrice(arr) {
    let bucket = 0;
    for (let product of arr) {
        if (product.price > bucket) {
            bucket = product.price;
        }
    }
    return bucket;
}

// Write a function named `discountCheck`. The function should accept an object that represents a customer's
// transaction.  The object passed into the function should have `customerName`, `items`, and `clubMember` properties. A customer will qualify for a discount
// if they have a total from the `items` property of 150 or greater, or if they are a club member. `discountCheck`
// should return a boolean representing whether the customer described by the object qualifies for a discount.
//
// **HINT: The `totalPrice` function may be used to calculate the total price of the items by passing in the array of items.**


discountCheck({
    customerName: "Barbara",
    items: [
        {name: 'tomatoes', price: 4},
        {name: 'potatoes', price: 6},
        {name: 'wine', price: 16},
    ],
    clubMember: true
});
// true

discountCheck({
    customerName: "Dale",
    items: [
        {name: 'television', price: 400},
        {name: 'xbox', price: 599},
        {name: 'soda', price: 1},
    ],
    clubMember: false
});
// true

discountCheck({
    customerName: "Kenneth",
    items: [
        {name: 'doughnuts', price: 7},
        {name: 'apple juice', price: 3},
        {name: 'bird seed', price: 13},
    ],
    clubMember: false
});
// false


function discountCheck(input) {
    if (input.clubMember === true || totalPrice(input.items) >= 150) {
        return true;
    } else {
        return false;
    }
}

// Write a function named `newProduct` with two parameters, a string that contains a name, and a number representing the
// product's price, and returns an object with properties `name` and `price`.

newProduct('tomatoes', 3.99) // {name: 'tomatoes', price: 3.99}
newProduct('Yu-Gi-Oh Booster Pack', 5.89) // {name: 'Yu-Gi-Oh Booster Pack', price: 5.89}



function newProduct( name, number) {
    return {
        name: name,
        price: number,

    }
}

// Write a function named `countWords` that accepts a string and returns the number of words in that string.

function countWords(str) {
    let word = str.split(' ');
    if (str === "") {
        return 0;
    }
    else  return word.length;
}
console.log(countWords("abc"));



// Write a function named `describeNumber` that takes in an integer and will return an object describing different
// features of the input as a number. If the input is a number, the object should have three properties: `value` for the
//     value passed, `evenOrOdd` which should be a string to identify whether the passed argument is evenly divisible by 2,
//     and `numberOfDigits` which should count the number of digits in the argument passed into the function:


function describeNumber(input) {
    if (!isNaN (parseFloat(input))) {
        let obj ={};
        obj.value= parseFloat(input);
        obj.evenOrOdd= evenOrOdd(input);
        obj.numberOfDigits= (input.toString().length);

        return obj;
    }
}

console.log(describeNumber());


// function findHighestPrice(input) {
//     let highest = [0];
//     for (let i=0; i<input.length; i++) {
//         if ( input[i].price > highest){
//         highest= input[i].price;
//     }
// }
// return highest;
// }







