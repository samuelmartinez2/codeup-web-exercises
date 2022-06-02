"use strict";
$(document).ready(function(){
const URL = "https://api.openweathermap.org/data/2.5/onecall";

// $.get(URL, {
//     APPID: OPEN_WEATHER_APPID,
//     lat: 40.7485452,
//     lon: -73.9879522,
//     units: "imperial"
// }).done(function (results) {
//     console.log(results.daily[0])
// })

    //
function getSearchInput(){
    return ($('#data').val());
    // console.log(`search method: ${val}`);


}

$('#btn').click(function(){
    updateWeather(getSearchInput());
});

// // console.log(getSearchInput());
//


function updateWeather(cityName){
    geocode(cityName, MAPBOX_API_KEY).then(function (data) {
        // console.log('Startign geocode');
        // console.log('This is the geo data' + data);
        $.get(URL, {
            APPID: OPEN_WEATHER_APPID,
            lat: data[1],
            lon: data[0],
            units: "imperial"
        }).done(function (results) {
            console.log(results);
            console.log(URL);

            let date = new Date(results.daily[0].dt * 1000);

            function dayofweek(input) {
                let dayMin = [];
                let dayMax = [];
                let dayDate= [];
                $(results).each(function () {
                    dayMin += results.daily[input].temp.min;
                    dayMax += results.daily[input].temp.max;
                    dayDate += new Date(results.daily[input].dt * 1000)

                })
                return dayDate + " min " + dayMin +" max " + dayMax
            }



            let Valu=date + " min " + results.daily[0].temp.min + " max " + results.daily[0].temp.max
            // $("#icon").css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[0].weather[0].icon + ".png')")
            $(".day1").html(dayofweek(0)).css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[0].weather[0].icon + ".png')")
            $(".day2").html(dayofweek(1)).css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[1].weather[0].icon + ".png')")
            $(".day3").html(dayofweek(2)).css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[2].weather[0].icon + ".png')")
            $(".day4").html(dayofweek(3)).css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[3].weather[0].icon + ".png')")
            $(".day5").html(dayofweek(4)).css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[4].weather[0].icon + ".png')")
            $(".day6").html(dayofweek(5)).css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[5].weather[0].icon + ".png')")
            $(".day7").html(dayofweek(6)).css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[6].weather[0].icon + ".png')")



        })
    })


}

// Geocode the string to receive the LAT, LONG to plug in for our OpenWeatherAPI Call.


// $.get(URL, {
//     APPID: OPEN_WEATHER_APPID,
//     // utilizing marker from mapbox
//     lat: marker.getLngLat()[1],
//     lon: marker.getLngLat()[0],
//     units: "imperial"
// }).done(function (results) {
//     console.log(results)
// })
//
// const iconURL = "http://openweathermap.org/img/w/" + iconID + ".png"

mapboxgl.accessToken = MAPBOX_API_KEY;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-98.4946, 29.42], // starting position [lng, lat]
    zoom: 9 // starting zoom

});

const CITYMARKER = new mapboxgl.Marker()
    .setLngLat([-98.4896, 29.4269])
    .setDraggable(true)
    .addTo(map);

let LONG_LAT = [];

CITYMARKER.on("dragend", function () {
    LONG_LAT = CITYMARKER.getLngLat();
    // document.getElementById("place").innerHTML = LONG_LAT.lng + ", " + LONG_LAT.lat;
    map.flyTo({center: [LONG_LAT.lng, LONG_LAT.lat]});
    reverseGeocode(LONG_LAT, MAPBOX_API_KEY).then(function (data) {
        return updateWeather(data);
        console.log(updateWeather(data))
        // $.get(URL, {
        //     APPID: OPEN_WEATHER_APPID,
        //     lat: data[1],
        //     lon: data[0],
        //     units: "imperial"
        // }).done(function (results) {
        //     console.log(results);
        //     console.log(URL);
        // })
    })
});





// end jquery
});







