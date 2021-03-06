   <!--   Programmed by: Xiaofei WANG   -->   



// Code for the Add Location page.


function initMap(){
                          var mapDiv = document.getElementById('map');
                          var map = new google.maps.Map(mapDiv,{
                              center: {lat:-37.8, lng: 144.95},
                              zoom: 13
                          });
                          var geocoder = new google.maps.Geocoder();
                          geocodeAddress(geocoder, map);
                      }
                                        
function geocodeAddress(geocoder, resultsMap) {
         var address = document.getElementById('address').value;
        var infowindow = new google.maps.InfoWindow;
        geocoder.geocode({'address': address}, function(results, status) {
       if (status === google.maps.GeocoderStatus.OK) {
                                  resultsMap.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
               map: resultsMap,
             position: results[0].geometry.location
                                  });
                         lat=results[0].geometry.location.lat();
        long=results[0].geometry.location.lng();         infowindow.setContent(results[0].formatted_address)
                                  infowindow.open(resultsMap,marker)
                                  }
                          })
                      }
function initAutocomplete() {
  // Create the autocomplete object, restricting the search to geographical
  // location types.
  autocomplete = new google.maps.places.Autocomplete(
      /** @type {!HTMLInputElement} */(document.getElementById('address')),
      {types: ['geocode']});
}


var lat=0;
var long=0;


function locationInformation(Name,Location,lat,long) {
    this.nickname=Name;
    this.locations=Location;  
    this.lat=lat;
    this.long=long;  
}

//x is the number/index of the location stored
var x=0;

//Get the previous number of location stored or start with zero

// Using JSON to stringify the object and store to the local storage : 
//information stored in local storage therefore can access by other file
function SaveLocation() {
    var nickname=document.getElementById("nickname").value;

    
    var locations=document.getElementsByName("locat");
   
    for (var i = 0, length = locations.length; i < length; i++) {
    if (locations[i].checked) {
        // do whatever you want with the checked radio
          locations=locations[i].value;

        // only one radio can be logically checked, don't check the rest
        break;
    }
}
    
   
    var location= new locationInformation(nickname,locations,lat,long);
    if (JSON.parse(localStorage.getItem("numberOflocation"))!==null) {
    x=JSON.parse(localStorage.getItem("numberOflocation"));
    } else {
        x=0;}
if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem(x,JSON.stringify(location)); //x is the number/index of the location stored
    x+=1;
    localStorage.setItem("numberOflocation", JSON.stringify(x));
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Local Storage...";
}
  window.location="index.html";
 
    console.log(location)
}

function ClearLocation(){
  
    localStorage.clear();
}



function geoFindMe() {
  var output = document.getElementById("adress");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
     var lat = position.coords.latitude;
    var long = position.coords.longitude;
console.log(lat,long)
    

    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + long + "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);
  };

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  };

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}




