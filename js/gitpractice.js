"use strict";
(function(){
//     console.log("hello test");
//
//     let str= "a string";
//     let num= 123;
//     let boolian= true;
//
//
//     function type_of(input){
//         return typeof input;
//     }
//
//     console.log(type_of(boolian));
//     console.log(type_of(str));
//     console.log(type_of(num));
//     console.log(type_of(false));
//     console.log(type_of(89677687687869.7878));
//
// function square(input){
//     return input*input;
// }
//
//     console.log(square(2));
//
// function concstr(input){
//     return str + input;
// }
//
//     console.log(concstr(" another string"));
// //
// // function addtostring(){
// //     return str + prompt("give me another string ")
// // }
// //
// //     console.log(addtostring());
//
// function ifalse(input){
//     if (typeof input == "boolean"){
//     return true;}
//     else
//     { return false;}
//
// }
//
//     console.log(ifalse(false));
//     console.log(ifalse(true));
//     console.log(ifalse("false"));
//     console.log(ifalse("tfalse"));
//
//
//
// function howlong(input){
//     return input.length;
// }
//
//     console.log(howlong("hellostring"));
//
//
// const arrayofnum= [2,3,4,5]
//
//     function arraylong(array){
//     return array.length
//     }
//
//     console.log(arraylong(arrayofnum));
//
// function isNumber(input){
//     if(!isNaN(parseFloat(input))){
//         return true;
//     }else{
//         return false;
//     }
//     }
//
//     function addtwonumbers(x,y){
//     if(isNumber(x) && isNumber(y)){
//         return parseFloat(x) + parseFloat(y);
//     }else
//         return false;
//     }
//
//
//
//
//
//
//     // function that tells if the entire array is numbers
//
//
//     const array1=[234,232,432]
//     const array2=[true,false,2424,"false"]
//     const array3=["3243wed","32","324"]
//
//
//     function arearraynumber(inputarray){
//     //for loop
//         for (let i=0;i < inputarray.length; i++){
//           if  (isNumber(inputarray[i])== false){
//               return false;
//           }
//         }
//         return true;
//     }
//
//     console.log(arearraynumber(array1));
//
// // male a function that adds input at end of array
//
// function addinputend(input) {
//     array1.push(input);
// }
//     addinputend(false);
//
//     console.log(array1);
//     console.log(array2);
//     console.log(array3);
//
// // make a function that removes the last element in an array
//
//     function removeinend() {
//         array1.pop();
//     }
//     removeinend();
//
//     console.log(array1);
//
// function addfrontelement(input){
//     array1.unshift(input);
//
// }
// addfrontelement(false);
//
// console.log(array1);
//
// let numb = 1;
// let numarray = [1234,12];
// const superNumber = {value:4, negpos:"positive", integer: true };
// const superNumber2 = {value:-42, negPos:"negative", integer:true };
//
//     console.log(superNumber2);
//
//  //funtion that takes in an object and makes it a favorite numbet>true
//
//  function makeFavorite(obj){
//      obj.favorite = true;
//      superNumber.favorite = true;
//  }
//
//     console.log(superNumber2);
//     makeFavorite(superNumber2);
//     console.log(superNumber2);
//
//
//     //tell me about your number
//     function shortNumber(obj){
//         return {value:obj.value, negpos:obj.negpos}
//     }
//
//     console.log(shortNumber(superNumber));
//
//
//
// let strArr = [ 'asdfasfasdf','asdfasdfa','asdfasdf']
//
//
//     function checkforString(tringArray) {
//     if (typeof array1[i] == "string"){
//
//     }else {
//         return false;
//     }
//
//     }
//
//     return // this return will hav to be outside the loop in order to run
//
//
//     for(let i = array1.length -1; i >= 0; i--) // this is to count down from array length
//
//         // for(let i = 0; i <array.length; i = i*2) this skips a number
//
//
//
//
//
// let strArr = ['rte','fer','fde',]
//
// function doubleThelettersinArray(strArray) {
//         let bucket ='';
//         let bucketArray =[];
//         for (let i = 0; i<strArray.length; i++){
//             strArray[i].repeat(2); // or you can do strArray[i] + strArray[i]
//             bucketArray.push(bucket);
//         }
//         return bucketArray;
// }
//
//     function doubleThelettersinArray2(strArray) {
//         let finalArray2 = [];
//         for (let i = 0; i < strArray.length; i++) {
//             let str = strArray[i].repeat(2); // or you can do strArray[i] + strArray[i]
//             bucketArray.push(str);
//         }
//         return finalArray2;
//
//     }
//
//     let number = [2,4,5,6]
//
//    // multiplesofFive;
//
//     function multipleofFive(numberArray) {
//         for ( let numnie of numberArray){
//             if (numnie%5===0){
//             }else{
//                 return false;
//             }
//         }
//         return true;
//     }
//
//
//     //lowest price
//
// let supernumberArray = [{numero:2, favorite:"yes"}, {numero:-2, favorite:"no"},{numero:10, favorite:"no"}]
//
//
// function findlowesPrice(arrayOfObject){
//         let lowestPrice = arrayOfObjects[0].numero;
//         for(let superNumber of arrayOfObjects){
//             if(superNumber.numero < lowesPrice){
//                 lowesPrice = superNumber.numero;
//                 // lowesObject = superNumber;
//             }
//         }
//         return lowestPrice
// }
//
//     console.log(findlowesPrice(superNumber));
//


    //
    // for(var i = 0; i <= 10; i++) {
    //     console.log(i);
    // }
    //

    var isColdOutside = true;

    var clothingToWear;

    if (isColdOutside) {
        clothingToWear = 'sweater and a jacket';
    } else {
        clothingToWear = 'shorts and a t-shirt';
    }




})();
