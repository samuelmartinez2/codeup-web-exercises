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
let googledays = prompt("how many hours did you work at google?");
// console.log(googledays);
// confirm ("you entered " + googledays+ " days");
//
let amazondays = prompt( "how many days did you work at amazon?");
//console.log(amazondays);
// confirm ("you entered " + amazondays + " days");

let facebookdays = prompt( "how many days did you work at facebook?")
// console.log(facebookdays);
// confirm ("you entered " + facebookdays + " days");
//

//alert ("your payment for this will be " + facebookdays*prompt( "what is facebooks hourly pay")+" dollars")

//alert ("your will get "+ googledays*prompt("what is googles hourly pay")+ " dollars for this");

//alert ("your pay will be "+ amazondays*prompt("what is amazon's hourly rate")+ " dollars for this");


//let total=("your total payment will be" + (facebookdays*prompt( "what is facebooks hourly pay"))+ (googledays*prompt("what is googles hourly pay"))+ (amazondays*prompt("what is amazon's hourly rate")) + "total")


let total= facebookdays*prompt( "what is facebooks hourly pay") + googledays*prompt("what is googles hourly pay") + amazondays*prompt("what is amazon's hourly rate")

alert ("your Total will be" + total + "dollars")

console.log (total)







