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
