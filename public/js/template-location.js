	var labels = '';
	var labelIndex = 0;
	var map;
	marca=0;
	
function initMap() {
			  var myLatLng = {lat: -34.621775, lng:-58.434355};
			  map = new google.maps.Map(document.getElementById('map'), { 
			  center: myLatLng,
			  zoom: 12
			  });
			   
			  google.maps.event.addListener(map, 'click', function(event) {
					  	if (marca <=1)
					  	{
					  		marca++;
							addMarker(event.latLng, map);
						}  

			     });
		      infoWindow = new google.maps.InfoWindow();
}

function addMarker(location, map){
		if (marca <=1){
   			var marker = new google.maps.Marker({
		    position: location,
		    label: labels[labelIndex++ % labels.length],
		    draggable:true,
		    map: map,
			});
			    google.maps.event.addListener(marker, 'click', function(){
			        openInfoWindow(marker);
			    });
		}
}

function openInfoWindow(marker) {
    var markerLatLng = marker.getPosition();
    infoWindow.setContent([
        ' Latitud: ' +
        markerLatLng.lat()+
        '  || Longitud: '+
        markerLatLng.lng()
    ].join(''));
    infoWindow.open(map, marker);
}

