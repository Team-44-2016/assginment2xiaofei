// Code for the View Location page.

// This is sample code to demonstrate navigation.
// You need not use it for final app.

var locationIndex = localStorage.getItem(APP_PREFIX + "-selectedLocation"); 
if (locationIndex !== null)
{
    var locationNames = [ "Location A", "Location B" ];
    // If a location name was specified, use it for header bar title.
    document.getElementById("headerBarTitle").textContent = locationNames[locationIndex];
}
      function initMap(){
                          var mapDiv = document.getElementById('map');
                          var map = new google.maps.Map(mapDiv,{
                              center: {lat:44.540, lng: -78.546},
                              zoom: 13
                          });
                          var geocoder = new google.maps.Geocoder();
                          geocodeAddress(geocoder, map);
                      }