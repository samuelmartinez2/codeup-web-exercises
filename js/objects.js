(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    let person =
       // [
    {
        firstName: "Samuel",
        lastName: "Martinez"

    }
    //     {
    //     sayHello() {
    //     return "Hello from "
    // }}
    //     {
    //     firstName: "Jose",
    //         lastName: "Hernandez"
    // }]

console.log(person.firstName +" " + person.lastName)
    console.log(person.lastName)
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
function sayHello(input) {
    return "Hello from " + input
    }
    //let sayHello = "hello from" + " "+ person.firstName+ " "+ person.lastName


    console.log(sayHello(person.firstName+ " "+ person.lastName))

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];


    shoppers.forEach(function (shoppers) {
        if (shoppers.amount > 200) {
        console.log(shoppers.name+"'s original total is "+shoppers.amount+" new total with discount is "+  (shoppers.amount - shoppers.amount * .12));
    }})


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    let books =[
     {
        title: "tile 1",
        author: {
            firstName: "Fname1",
            lastName: "Lname1"
        }
    },
        {
            title: "title 2",
            author: {
                firstName: "Fname2",
                lastName: "Lname2"
            }
            },
        {
            title: "title 3",
            author: {
                firstName: "Fname3",
                lastName: "Lname3"

            }
        },
        {
            title: "title 4",
            author: {
                firstName: "Fname4",
                lastName: "Lname4"

            }
        },
        {
            title: "title 5",
            author: {
                firstName: "Fname5",
                lastName: "Lname5"

            }
        }
]
    console.log(books[0].title)
    console.log(books[0].author.firstName)
    console.log(books[0].author.lastName)
    console.log(books[1].title)
    console.log(books[1].author.firstName)
    console.log(books[1].author.lastName)
    console.log(books[2].title)
    console.log(books[2].author.firstName)
    console.log(books[2].author.lastName)
    console.log(books[3].title)
    console.log(books[3].author.firstName)
    console.log(books[3].author.lastName)
    console.log(books[4].title)
    console.log(books[4].author.firstName)
    console.log(books[4].author.lastName)




    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
let i=1
    books.forEach(function (books){
        console.log("Book # "+ i++ +"\n" +"Title: " + books.title + "\n"+"Author: "+ books.author.firstName + " " + books.author.lastName+"\n"+"---")
    })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */


    // function createBook(title, authorN) {
    //    return("Title: "+ title + "\n" + "Author: " + authorN )
    // }
    // console.log(createBook("Litle pigs", "Bob Dilan"));

    function showBookInfo(bookobject){
      return books.title
  }

    console.log(showBookInfo(books.title.author.firstName));


})();
