// Store our API endpoint inside queryUrl
var url = "https://admin.beachreportcard.org/api/locations";

// Creating map object
var myMap = L.map("map", {
    center: [34.019625000000000, -118.510699000000000],
    zoom: 10
  });
  
  // Adding tile layer to the map
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 28,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);


// Grab the data with d3
d3.json(url, function(response) {
console.log(response);
    // Create a new marker cluster group
    var markers = L.markerClusterGroup();
  
    // Loop through data
    for (var i = 0; i < response.length; i++) {
  
      // Set the data location property to a variable
      var geo = response[i]._source.geo;
  
      // Check for location property
      if (geo) {
  
        // Add a new marker to the cluster group and bind a pop-up
        markers.addLayer(L.marker([geo[0], geo[1]])
          .bindPopup(response[i]._source.title));
      }
  
    }
  
    // Add our marker cluster layer to the map
    myMap.addLayer(markers);
  
  });