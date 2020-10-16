

var myMap = L.map("map", {
  center: [39.871616, -86.130249],
  zoom: 13
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);



d3.json(url).then(function(data) 

{
data = JSON.parse(data);

// Print the tvData
// console.log(data);

  for (var i = 0; i < data.length; i++) {

  var buildings = data[i];

  var location = [];

  parseFloat(buildings[0]);
  parseFloat(buildings[1]);

  location.push(buildings[0]);
  location.push(buildings[1]);

  // console.log(location)

  if (buildings[10] <= 75000) {
  L.marker(location, {icon: redIcon})
  .bindPopup("<h1>" + "$"+ buildings[10] + "</h1> <hr> <h3>Address: " + buildings[2] + "</h3>")
  .addTo(myMap);
  }

  if (buildings[10] > 75000 & buildings[10] < 200000) {
      L.marker(location, {icon:yellowIcon})
      .bindPopup("<h1>" + "$"+ buildings[10] + "</h1> <hr> <h3>Address: " + buildings[2] + "</h3>")
      .addTo(myMap);
  }

  if (buildings[10] > 200000 & buildings[10] < 750000) {
      L.marker(location, {icon:greenIcon})
      .bindPopup("<h1>" + "$"+ buildings[10] + "</h1> <hr> <h3>Address: " + buildings[2] + "</h3>")
    .addTo(myMap);
  }

  if (buildings[10] > 750000) {
    L.marker(location, {icon:goldIcon})
    .bindPopup("<h1>" + "$"+ buildings[10] + "</h1> <hr> <h3>Address: " + buildings[2] + "</h3>")
  .addTo(myMap);}
}
      
  

});


 