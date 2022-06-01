"use strict";
const URL = "https://api.openweathermap.org/data/2.5/onecall";

// $.get(URL, {
//     APPID: OPEN_WEATHER_APPID,
//     lat: 40.7485452,
//     lon: -73.9879522,
//     units: "imperial"
// }).done(function (results) {
//     console.log(results.daily[0])
// })

// Geocode the string to receive the LAT, LONG to plug in for our OpenWeatherAPI Call.
geocode("San Antonio ,Texas US", MAPBOX_API_KEY).then(function (data) {
    console.log(data)
    $.get(URL, {
        APPID: OPEN_WEATHER_APPID,
        lat: data[1],
        lon: data[0],
        units: "imperial"
    }).done(function (results) {
        console.log(results);
        // $("#icon").css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[0].weather[0].icon + ".png')")
        $(".mon").html("date " + results.daily[0].dt + " min " + results.daily[0].temp.min + " max " + results.daily[0].temp.max);
        $(".icon1").css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[0].weather[0].icon + ".png')")
        $(".tue").html("date " + results.daily[1].dt + " min " + results.daily[1].temp.min + " max " + results.daily[1].temp.max);
        $(".icon2").css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[1].weather[0].icon + ".png')")
        $(".wed").html("date " + results.daily[2].dt + " min " + results.daily[2].temp.min + " max " + results.daily[2].temp.max);
        $(".icon3").css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[2].weather[0].icon + ".png')")
        $(".thu").html("date " + results.daily[3].dt + " min " + results.daily[3].temp.min + " max " + results.daily[3].temp.max);
        $(".icon4").css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[3].weather[0].icon + ".png')")
        $(".fri").html("date " + results.daily[4].dt + " min " + results.daily[4].temp.min + " max " + results.daily[4].temp.max);
        $(".icon5").css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[4].weather[0].icon + ".png')")
        $(".sat").html("date " + results.daily[5].dt + " min " + results.daily[5].temp.min + " max " + results.daily[5].temp.max);
        $(".icon6").css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[5].weather[0].icon + ".png')")
        $(".sun").html("date " + results.daily[6].dt + " min " + results.daily[6].temp.min + " max " + results.daily[6].temp.max);
        $(".icon7").css("background-image", "url('http://openweathermap.org/img/w/" + results.daily[6].weather[0].icon + ".png')")
    })
})

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

