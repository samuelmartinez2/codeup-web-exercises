"use strict"
console.log("Yay I completed my warm up!")

function fizBuz(){
    for(let i = 1; i <= 20; i++) {
        if ((i % 3 == 0) && (i % 5 == 0) ) {
            console.log("Fizz Buzz");
        }
        else if (i % 3 == 0) {
            console.log("Fizz")
        }
        else if(i % 5 == 0) {
            console.log("Buzz")
        }
        else {
            console.log(i)
        }
    }
}
fizBuz()


//
// function fizBuz(){
//     for(let i = 1; i <= 20; i++) {
//
//         if (i % 3 == 0) {
//             console.log("Fizz")
//         }
//         else if(i % 5 == 0) {
//             console.log("Buzz")
//         }
//         else if ((i % 3 == 0) && (i & 5 == 0)) {
//             console.log("FizzBuzz")
//         }
//         else{
//                 console.log(i)
//             }
//         }
//     }
//
// fizBuz()

for (let x = 1; x <= 20; x++ ){
    var output = "";

    if (x % 3 == 0) {
        output += "fizz";
    }
    if (x % 5 == 0) {
        output += "Buzz"
    }
    if (output ==""){
        output = x;
    }
}
console.log(output);

// fetch("https://quotes.rest/qod").then(resp=> res.json().then =>
// console.log(res);)



    const URL = "https://quotes.rest/qod";
    fetch(URL).then(res => res.json()).then(res=>console.log(res.contents.quotes));

// const sayHello = name => 'Hello, ' + name + '!';
// console.log(sayHello("test"));

// new way
function tellMeAbout({ name, age }) {
    console.log(name); // 'codeup'
    console.log(age); // 4
}

const person = { name: 'codeup', age: 4 };
console.log(tellMeAbout(person));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evens = numbers.filter(n => {return n % 2 === 0});  // need to add return if adin brackets
console.log(evens); // [2, 4, 6, 8, 10]

const incremented = numbers.map((n) => n + 1);
console.log(incremented); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

// const numbers = [1, 2, 3, 4, 5];
//
// const sum = numbers.reduce((accumulation, currentNumber) =>
//     accumulation + currentNumber
// , 1);
//
// console.log(sum);


const sayHello = (name) => {
    const greeting = 'Hello,  ' + name + '!';
    return greeting;
};



console.log(sayHello('test'));