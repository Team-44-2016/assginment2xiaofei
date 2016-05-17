   <!--   Programmed by: Xiaofei WANG   -->   



// Code for the Add Location page.


function outputLocationA(){
        var fieldValue = document.getElementById('addressA').value;
        localStorage.setItem('addressA',fieldValue);

        var fieldValue = document.getElementById('nicknameA').value;
        localStorage.setItem('nicknameA',fieldValue);
           }



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
                           var address = document.getElementById('addressA').value;
                           var infowindow = new google.maps.InfoWindow;
                          geocoder.geocode({'address': address}, function(results, status) {
                              if (status === google.maps.GeocoderStatus.OK) {
                                  resultsMap.setCenter(results[0].geometry.location);
                                  var marker = new google.maps.Marker({
                                      map: resultsMap,
                                      position: results[0].geometry.location
                                  });
                                  infowindow.setContent(results[0].formatted_address)
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

function saveIt(){
           
            var geocoder = new google.maps.Geocoder();
            var address = document.getElementById('addressA').value;
            var nickName = document.getElementById('nicknameA').value;
            
    
            geocoder.geocode({'address': address}, function(results, status) {
                
                if (status == google.maps.GeocoderStatus.OK){
                  
                var lat =  results[0].geometry.location.lat();    
                var lng =  results[0].geometry.location.lng(); 
                    
                var save = new LocationWeatherCache();
                
                if (nickName === null){
                  save.addLocation(lat,lng,results[0].formatted_address)  
                }
                else{
                    
                 save.addLocation(lat,lng,nickName) 
                 
                }
                
                    
                }
            });
}