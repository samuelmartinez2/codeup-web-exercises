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
function sumOfElements(arr) {
    let bucket = 0
    for (let i =0; i < arrOfNums.lenght; i++) {
        bucket += arrOfNums[i];
    }
    return bucket;
}

console.log(sumOfElements([1, 2, 3, 4, 5]));
console.log(sumOfElements([23, 34, 12, 23]));
//this is wha i was trying
// sumOFElements([1,2,3,4,5]){
//     let numberArray=[1,2,3,4,5];
//     let numberString =  numberArray.join(',')
//     console.log(numberString)
// }
