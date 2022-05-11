"use strict";
(function(){


    //warm up #1
    //Write a function that takes in an array of strings and returns a string of the first letter of each element concatenated together:
    // ex. allFirstLetters(["dog","cat","frog","bat"]) returns--> "dcfb";

function allFirstLetters([array]) {
    let bucket = "";
    for (let el of array) {
        bucket += el[0];
    }
    return bucket;
}

const testArrayStrings= ["dog", "cat","frog","bat"];
console.log((allFirstLetters(testArrayStrings)))


//  warm up #2
//     write a function that takes in a string and return that string in alphabetical order.

    function alphabeticalOrder(string) {
    let stringArray= string.split('');
    console.log(stringArray)
        let sortedArray = stringArray.sort()
        console.log(sortedArray);
    return string.split('').sort().join('')
    }
alphabeticalOrder
console.log(alphabeticalOrder("codeup"))
})()

// warm up #3
// Write a function that takes in an array numbers and returns the sum of all elements.

function sumOfElements(arr) {
    let bucket = 0
    for (let el of arr) {
        bucket += el;
    }
    return bucket;
}
//same as above
// function sumOfElements(arr) {
//     let bucket = 0
//     for (let i =0; i < arrOfNums.lenght; i++) {
//         bucket += arrOfNums[i];
//     }
//     return bucket;
// }

console.log(sumOfElements([1, 2, 3, 4, 5]));
console.log(sumOfElements([23, 34, 12, 23]));
//this is wha i was trying
// sumOFElements([1,2,3,4,5]){
//     let numberArray=[1,2,3,4,5];
//     let numberString =  numberArray.join(',')
//     console.log(numberString)
// }

//
// Create a function, returnProductEssentialDetails, that takes in a product object and returns a simpler product object containing only the product name and price in cents.
//
//     Examples...
//
// let product1 = {
//     name: 'Hammar',
//     priceInCents: 400,
//     description: 'It is a a hammar.',
//     inventory: 25034
// }

// couldnt get this at all
// function returnProductEssentialDetails(item1) {
//     let name = "coke";
//     let price = 1.00;
//     let type = "drink";
//     return name +;
// }
//
// console.log(returnProductEssentialDetails(item1));



let product1 = {
    name: 'Hammar',
    priceInCents: 400,
    description: 'It is a a hammar.',
    inventory: 25034
}

let product2 = {
    name: 'Computer',
    priceInCents: 40000,
    description: 'It is a computer.',
    inventory: 33000
}

let product3 = {
    name: 'Ruler',
    priceInCents: 1000,
    description: 'It is a ruler.',
    inventory: 2200
}



function returnProductEssentialDetails(product) {
    return {
        name: product.name,
        priceInCents: product.priceInCents
    }
}
console.log(returnProductEssentialDetails(product1));


const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "Spetember 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

//function that will accept an array and return the tallest object

function tallestObject(arr) {
    let tallest = {heightInMM: 0};
    for (let hamster of arr) {
        if (hamster.heightInMM> tallest.heightInMM) {
            tallest = hamster;
        }
    }
    return tallest;
}

console.log(tallestObject(hamsters));

//Write a function that will accept an array of objects and return the object from the array that is the most colorful.

function mostcolor(hamsters) {
    let colorf = {fur: []};
    for (let hamster of hamsters) {
        if (hamster.fur.length > colorf.fur.length) {
            colorf = hamster;
        }
    }
    return colorf;
}

console.log(mostcolor(hamsters));

function mostcolor(hamsters){
    let colorf = hamsters[0];
    for (let x=1; x<  hamster.length; x++) {
        if (hamster[x].fur.length > colorf.fur.length) {
            colorf = hamster[x];
        }
    }
    return colorf;