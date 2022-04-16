"use strict"

//  let color = prompt("what is your favorite color");
//  console.log(color);
//  alert ("Great, " + color + " is my favorite color also");
//
// let price = 3;
// let mermaid = "the little mermaid";
// let brotherbear = " brother bear";
// let hercules = " hercules";
//
// let number = parseFloat(prompt("how many movies did you rent"));
// console.log(number);
// confirm("you rented " + number + " movies")
//
// let mermaiddays = parseFloat(prompt("how many days did you rent " + mermaid + " for"));
// console.log(mermaiddays);
// confirm("you rented " + mermaid + " " + mermaiddays + " days")
//
//
// let brotherbeardays = parseFloat(prompt("how many days did you rent " + brotherbear + " for"));
// console.log(brotherbeardays);
// confirm("you rented " + brotherbear + " " +  brotherbeardays + " days")
//
//
// let herculesdays = parseFloat(prompt("how many days did you rent " + hercules + " for"));
// console.log(herculesdays);
// confirm("you rented " + hercules + " " +  herculesdays + " days")
//
//
// alert((mermaiddays + brotherbeardays + herculesdays) * price );

//et google = 400
//let amazon = 380
//let facebook = 350
//
//let googlehours = prompt("how many hours did you work at google?");
// console.log(googledays);
// confirm ("you entered " + googledays+ " days");
//
//let amazonhours = prompt( "how many hours did you work at amazon?");
//console.log(amazondays);
// confirm ("you entered " + amazondays + " days");

//let facebookhours = prompt( "how many hours did you work at facebook?")
// console.log(facebookdays);
// confirm ("you entered " + facebookdays + " days");
//

//alert ("your payment for this will be " + facebookhours*prompt( "what is facebooks hourly pay")+" dollars")

//alert ("your will get "+ googlehours*prompt("what is googles hourly pay")+ " dollars for this");

//alert ("your pay will be "+ amazonhours*prompt("what is amazon's hourly rate")+ " dollars for this");



// let total= facebookhours*prompt( "what is facebook's hourly pay") + googlehours*prompt("what is google's hourly pay") + amazonhours*prompt("what is amazon's hourly rate")
//
// alert ("your Total will be" + total + "dollars")
//
// console.log (total)


//
// let classmax = prompt("is the class full?")
//
//
// if (classmax ==="no"){
//     alert("Great!, you can sign up for the class if it works with your schedule")
// }
// let schedulec = prompt("does this conflict with your schedule")
// if (schedulec === "no" && classmax === "no"){
//     alert("Great!, you can sign up for the class")
// } else alert("Sorry this doesn't work for you, try again next semester")
//

//var username = ' codeup ';
//var password = ' not a strongpassword ';

//||parseInt(username.trim())||parseInt(password.trim())


let username = prompt("create a username");
//     if (username.length >= "20") {
//     alert("sorry your username need to be less the 20 characters")
// } else alert("Great!, now lets creat a strong password")

let password = prompt("create a password")
    if (password.length <= "5" || password === username ||username.trim() !== username || password.trim() !== password){
        alert("sorry, your password is not strong enought or has empty characters")
    } else alert( "Great, your password is strong enought to continue")

console.log(username.length)
console.log(password.length)
console.log (username)
console.log (username.trim()===username)
console.log (password.trim()===password)


//console.log .length(prompt( "create a username"))
 //   if ((userlong) <= '4') {
 //       alert("sorry your log in needs to be at least 5 or more characters")
//}

//let password = prompt("creat a pasword")









