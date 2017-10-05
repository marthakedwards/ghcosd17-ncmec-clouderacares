document.addEventListener("DOMContentLoaded", function(event) {
  mapboxgl.accessToken = 'pk.eyJ1IjoibWFydGhha2Vkd2FyZHMiLCJhIjoiY2o4ZXE2NmtzMTVudDJ3bjhkMDV4M3phYyJ9.46_f-en8XlTBbHr1CUmP8Q';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-96, 37.8],
    zoom: 3
  });

  var geojson = {
    "features": [
      {
        "type": "Feature",
        "properties": {
          "Lure Animal": "0",
          "Child Approximate Age 1": "9",
          "Lure Candy": "0",
          "Child Approximate Age 2": "",
          "Child Approximate Age 3": "",
          "Child Approximate Age 4": "",
          "Incident Location": "Russo St & Social St",
          "Incident State": "RI",
          "Child Approximate Age 5": "",
          "Child Approximate Age 6": "",
          "Lure Other Detail": "None",
          "Child Race 1": "Unknown",
          "Child Race 2": "",
          "Child Race 3": "",
          "Offender Race 1": "Hispanic",
          "Child Race 4": "",
          "Offender Race 2": "",
          "Child Race 5": "",
          "Offender Race 3": "",
          "Child Race 6": "",
          "Lure Other": "-1",
          "Vehicle Type": "",
          "Vehicle Color": "White",
          "Child ID 1": "551573",
          "Child ID 2": "",
          "Status": "Closed",
          "How Got Away": "Other",
          "Child ID 3": "",
          "Incident Zip": "2904",
          "Child ID 4": "",
          "Offender Perceived Age 1": "",
          "Child ID 5": "",
          "Offender Perceived Age 2": "",
          "Child ID 6": "",
          "Child Gender 1": "Male",
          "Offender Perceived Age 3": "",
          "Child Gender 2": "",
          "Incident County": "Providence",
          "Child Gender 3": "",
          "Offender Gender 1": "Male",
          "Child Gender 4": "",
          "Case Number": "1260531",
          "Incident City": "Providence",
          "Offender Gender 2": "",
          "Child Gender 5": "",
          "Offender Gender 3": "",
          "Source": "Internet",
          "Incident Time": "12:00 AM",
          "Child Gender 6": "",
          "Lure Ride": "0",
          "Lure Money": "0",
          "Incident Date": "1/4/12",
          "How Got Away Detail": "Walked away"
        },
        "geometry": {
          "coordinates": [
            43.8473,
            -77.7865
          ],
          "type": "Point"
        },
        "id": "89786e41ef9e4b8dd30a75f1388dfb19"
      },
      {
        "type": "Feature",
        "properties": {
          "Lure Animal": "0",
          "Child Approximate Age 1": "15",
          "Lure Candy": "0",
          "Child Approximate Age 2": "",
          "Child Approximate Age 3": "",
          "Child Approximate Age 4": "",
          "Incident Location": "Seaview Ave & Grant St",
          "Incident State": "CT",
          "Child Approximate Age 5": "",
          "Child Approximate Age 6": "",
          "Lure Other Detail": "None",
          "Child Race 1": "Unknown",
          "Child Race 2": "",
          "Child Race 3": "",
          "Offender Race 1": "Unknown",
          "Child Race 4": "",
          "Offender Race 2": "",
          "Child Race 5": "",
          "Offender Race 3": "",
          "Child Race 6": "",
          "Lure Other": "-1",
          "Vehicle Type": "Van",
          "Vehicle Color": "Burgundy",
          "Child ID 1": "551489",
          "Child ID 2": "",
          "Status": "Closed",
          "How Got Away": "Unknown",
          "Child ID 3": "",
          "Incident Zip": "6610",
          "Child ID 4": "",
          "Offender Perceived Age 1": "Unknown",
          "Child ID 5": "",
          "Offender Perceived Age 2": "",
          "Child ID 6": "",
          "Child Gender 1": "Female",
          "Offender Perceived Age 3": "",
          "Child Gender 2": "",
          "Incident County": "Fairfield",
          "Child Gender 3": "",
          "Offender Gender 1": "Male",
          "Child Gender 4": "",
          "Case Number": "1260468",
          "Incident City": "Bridgeport",
          "Offender Gender 2": "",
          "Child Gender 5": "",
          "Offender Gender 3": "",
          "Source": "Internet",
          "Incident Time": "9:00 PM",
          "Child Gender 6": "",
          "Lure Ride": "0",
          "Lure Money": "0",
          "Incident Date": "1/1/12",
          "How Got Away Detail": ""
        },
        "geometry": {
          "coordinates": [
            40.8473,
            -73.7865
          ],
          "type": "Point"
        },
        "id": "9b341aa24c9b33c9c4e11f84cb23df32"
      }
    ],
    "type": "FeatureCollection"
  }

  // add markers to map
  geojson.features.forEach(function(marker) {

    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
      // .setHTML('<h3>Attempted abduction</h3>'))
      .setHTML(
        '<h3>Attempted abduction</h3>' +
        '<p>Time: ' + marker.properties["Incident Date"] + ', ' + marker.properties["Incident Time"] + '</p>' +
        '<p>Location: ' + marker.properties["Incident Location"] + ', ' + marker.properties["Incident City"] + ', ' + marker.properties["Incident State"] + ', ' + marker.properties["Incident Zip"] + '</p>' +
        '<p>Offender information: ' + marker.properties["Offender Race 1"] + ', ' + marker.properties["Offender Gender 1"] + ', ' + marker.properties["Offender Perceived Age 1"] + ' years old' + '</p>' +
        '<p>Vehicle description: ' + marker.properties["Vehicle Type"] + ', ' + marker.properties["Vehicle Color"] + '</p>' + 
        '<p>Child information: ' + marker.properties["Child Race 1"] + ', ' + marker.properties["Child Gender 1"] + ', ' + marker.properties["Child Approximate Age 1"] + '</p>'
      ))
      .addTo(map);
  });

});
