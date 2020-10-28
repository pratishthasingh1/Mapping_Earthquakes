// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([40.496126, -100.496735], 4);
            // An alternative to using the setView() method is to modify each attribute in the map object using the curly braces notation as follows:

            // // Create the map object with a center and zoom level.
            // let map = L.map("mapid", {
            //   center: [
            //     40.7, -94.5
            //   ],
            //   zoom: 4
            // });
            // this is useful to add multiple tile layers

 // iterate by : for (let i=0; i < cities.length; i++)

 // Coordinates for each point to be used in the line.
let line = [
  [37.6213, -122.3790],
  [30.197351, -97.666793],
  [43.677485, -79.625184],
  [40.640741, -73.778330],
]; 

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  weight: 3,
  dashArray: 20,
}).addTo(map);
//  let cityData = [{
//     location: [40.7128, -74.0059],
//     city: "New York City",
//     state: "NY",
//     population: 8398748
//   },
//   {
//     location: [41.8781, -87.6298],
//     city: "Chicago",
//     state: "IL",
//     population: 2705994
//   },
//   {
//     location: [29.7604, -95.3698],
//     city: "Houston",
//     state: "TX",
//     population: 2325502
//   },
//   {
//     location: [34.0522, -118.2437],
//     city: "Los Angeles",
//     state: "CA",
//     population: 3990456
//   },
//   {
//     location: [33.4484, -112.0740],
//     city: "Phoenix",
//     state: "AZ",
//     population: 1660272
//   }
//   ];

 // Loop through the cities array and create one marker for each city.

 // or by cities.forEach(function(city)) to add each location to the marker() function


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    // setOpacity: 0.5,
    // id: 'mapbox/streets-v11',
    // tileSize: 512,
    // zoomOffset: -1,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map); 
