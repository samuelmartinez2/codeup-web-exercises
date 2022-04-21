"use strict";
(function() {
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzedColor(color) {
    if (color === "blue"){
        return " the sky is blue ";
    } else if (color === "yellow") {
        return " bananas are yellow ";
    } else {
        return " I don't have " +color+ ", sorry";
    }
}
console.log(analyzedColor("blue"));
console.log(analyzedColor("yellow"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//
function analyzedColor(randomColor) {
    if (randomColor === "blue"){
        return "the sky is blue";
    } else if (randomColor === "yellow") {
        return "bananas are yellow";
    } else {
        return "I dont have that color, sorry";
    }
}
    console.log(analyzedColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzedColor(randomColor){
    switch(randomColor) {
        case "red":
            return "red is a good color";
        case "blue":
            return"I like the color blue";
        default:
            return (randomColor + " is not a good color");
        break;
    }
}

console.log(analyzedColor(randomColor))


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

let usercolor = prompt( "what is your favorite color" ).toLowerCase().trim();
    alert( "your selected " + (usercolor) + "," + analyzedColor(usercolor))



    /* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

// let luckyn =Math.floor((Math.random()*6))
//     console.log (luckyn)
// function calculateTotal(luckyn)
// {
//     if (luckyn === 0) {
//         return (tot)
//     } else if (luckyn === 1) {
//         return (tot-(tot * .1))
//     } else if (luckyn === 2) {
//         return (tot-(tot * .25))
//     } else if (luckyn === 3) {
//         return (tot-(tot *.35))
//     } else if (luckyn === 4) {
//         return (tot- (tot * .5))
//     } else if (luckyn === 5) {
//         return (tot-(tot))
//     } else
//     {return (total)}}
// let tot = prompt( "what is your total")
//     alert (" your lucky number is " + luckyn);
// alert ("your new total with your discount will be " + calculateTotal(luckyn))


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

    function calculateTotal(luckyNumber) {
        if (luckyNumber === 0) {
            return (tot2)
        } else if (luckyNumber === 1) {
            return (tot2-(tot2 * .1))
        } else if (luckyNumber === 2) {
            return (tot2-(tot2 * .25))
        } else if (luckyNumber === 3) {
            return (tot2-(tot2 *.35))
        } else if (luckyNumber === 4) {
            return (tot2- (tot2 * .5))
        } else if (luckyNumber === 5) {
            return (tot2-(tot2))
        }}
    let tot2 = prompt( "what was your total")
    alert ("Your total was "+ "$"+tot2 + " with a lucky number " + luckyNumber);
    alert (" Your total was " + "$"+tot2 + " however with your discount; your new total will be " + "$"+calculateTotal(luckyNumber))

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

let game= confirm("would you like to pick a number")
//function numb(prompt("great what number"))
            switch(game) {
                case (false):
                    alert("sorry you dont want to play")
                    break;
                case (true):
                   let numb = parseFloat(prompt("great what number would you like to pick"));
                    if (!numb || isNaN(numb)) {
                        alert("that is not a number")
                        break;
                    }
                    if (numb % 2 === 0) {
                        alert(numb + " is an even number")
                    } else {
                        alert("the number " + numb + " is odd");
                    }
                    alert("if you add 100 to your number, you get " + (numb + 100))
                    if (numb > 0) {
                        alert("your number is positive")
                    } else {
                        alert("your number is negative")
                        break;
                    }
           }
// this is how instructor did it!!!

    // function numberGame(){
    // let userVal = parsefloat(prompt("give me a number!"));
    // if (isNaN(userVal)){
    //     alert("thats not a number")
    // }else{
    //     alert("hey, did you know that" + userVal + "is an "+evenOrOdd(userVal) + "number")
    //     alert(" hey," + userVal + "plus 100 is " + plus100(userVal))
    //
    // }
    // }
    //
    // function plus100(num){
    // return num+100
    // }
    //
    // function evenOrOdd(num){
    // if (num===0){
    //     return "zero"}
    // else if(num % 2===0){
    //     return "even";
    // }else{
    //     return "odd";
    //  }
    // }
    //




            }())