"use strict";
(function() {
// let i =1
// while ( i <= 65536) {
//     console.log (i); i*=2
// }


    let randomNumb50to100 = Math.floor(Math.random()*51)+50
    let custumerbuy=Math.floor(Math.random()*5)+1;
    let custumer = 0

    do {
        custumer++;
        custumerbuy = Math.floor(Math.random() * 5) + 1;
        //console.log("numbers are: " + randomNumb50to100 + ", " + custumerbuy);
        if (custumerbuy > randomNumb50to100)
        {
            console.log("cant sell you " + custumerbuy+ " we don't have that many");
        } else {
            randomNumb50to100 -= custumerbuy;
            console.log("customer ordered "+ custumerbuy + ".  we now have " + randomNumb50to100 + " left")
        }}
    while (0 < randomNumb50to100);{
        console.log( " cool, we sold all our cones")
    }
//



    // custumerbuy;
    //  console.log(custumerbuy);
    //  console.log (randomNumb50to100);
    //      break;
    // } while (custumerbuy <= randomNumb50to100) {console.log ("customer bought "+ custumerbuy + " we have " + (randomNumb50to100 - custumerbuy) + " left")}
    //
    //




}())