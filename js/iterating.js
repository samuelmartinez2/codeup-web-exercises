(function() {
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    let names = ["Bob", "Carlos", "Joe", "Jose"];

    // practice with other string
    let numbers = ["10", "20", "30", "40"]

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length)
    console.log(numbers.length)
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);


    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

    // did the same thing with a numbers string
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

names.forEach(function(name){
    console.log(name);
})

    numbers.forEach(function(number) {
        console.log(number);
    })


    let index = 0
    for (let name of names) {
        console.log(name + " at index " + (index++));
    }

    let indexx = 0
    for (let number of numbers) {
        console.log(number + " " + indexx++);
    }

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */


   function first() {
       return names[0]
    }
   console.log(first())

    function second() {
       return names[1]
    }
    console.log(second())

    function third() {
       return names[2]
    }
    console.log(third())

    function last() {
       return names[names.length - 1]
    }
    console.log(last())















    // function first(names) {
    //  return [names [0]]};
    // console.log(first())

// function first(names) {
//         return names[0];
//     }
// console.log(first(names));
//
// function second(names) {
//     return names[1];
// }
// console.log(second(names));
//
// function last(names) {
//     return names[names.length -1]
//     }
//     console.log(last(names));


//
})();
