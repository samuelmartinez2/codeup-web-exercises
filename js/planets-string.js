(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    //var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
let planetsArray =planetsString.split('|')
    // console.log(planetsArray);
console.log (planetsArray);
    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */

    let planetsWbr = planetsArray.join('<br>')

    // let planetsWbr = "Mercury<br>Venus<br>Earth<br>Mars<br>Jupiter<br>Saturn<br>Uranus<br>Neptune";


    console.log(planetsWbr)

    //this is how you add it to the html document
    document.body.innerHTML += planetsWbr;

//function list (<li>planetsWbr</li>) {

//}console.log(list())

     /** BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

     // this is how it is supposed to look like.

    let planetsUL = "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>";

    document.body.innerHTML += planetsUL;


})();
