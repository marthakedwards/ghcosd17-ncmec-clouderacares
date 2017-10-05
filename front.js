document.addEventListener("DOMContentLoaded", function(event) {
  mapboxgl.accessToken = 'pk.eyJ1IjoibWFydGhha2Vkd2FyZHMiLCJhIjoiY2o4ZXE2NmtzMTVudDJ3bjhkMDV4M3phYyJ9.46_f-en8XlTBbHr1CUmP8Q';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-96, 37.8],
    zoom: 3
  });

  // data scheme we are using
  var dataSet = [
    {
      location: {
        state: "Florida",
        postalCode: "32836",
        city: "Orlando",
        county: "",
        coordinates: [-81.483570, 28.426323]
      },
      abductor: {
        race: "White",
        gender: "Male",
        age: "25",
        lure: ""
      },
      vehicle: {
        type: "Van",
        color: "Black"
      },
      abductee: {
        gender: "Female",
        age: "6",
        race: "Hispanic"
      },
      date: "01/02/16",
      time: "9:00 PM"
    },
  ]

  var features = [];

  dataSet.forEach(function(element) {
    features.push({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: element.location.coordinates
      },
      properties: element
    })
  });

  var geojson = {
    type: 'FeatureCollection',
    features: features
  };

  // add markers to map
  geojson.features.forEach(function(marker) {

    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
      .setHTML(
        '<h3>Attempted abduction</h3>' +
        '<p>Time: ' + marker.properties.date + ', ' + marker.properties.time + '</p>' +
        '<p>Location: ' + marker.properties.location.city + ', ' + marker.properties.location.state + ', ' + marker.properties.location.postalCode + '</p>' +
        '<p>Abductor information: ' + marker.properties.abductor.race + ', ' + marker.properties.abductor.gender + ', ' + marker.properties.abductor.age + ' years old' + '</p>' +
        '<p>Vehicle description: ' + marker.properties.vehicle.type + ', ' + marker.properties.vehicle.color + '</p>' + 
        '<p>Abductee information: ' + marker.properties.abductee.race + ', ' + marker.properties.abductee.gender + ', ' + marker.properties.abductee.age + '</p>'
      ))
      .addTo(map);
  });

});
