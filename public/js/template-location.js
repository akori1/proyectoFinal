var dir = location.search;
var dividir = dir.split("=");
var id = dividir[1];
var url= 'http://connectedin.herokuapp.com/person/%id%';
url = url.replace (/%id%/g,id);
   

var url= 'http://connectedin.herokuapp.com/person/%id%';
    url = url.replace (/%id%/g,id);
var algo=[];
var i=-1;













	var labels = '';
	var labelIndex = 0;
	var map = Array();
	marca=0;
	


function initMap(id) {

			
			  var ubi2 = -34.601236;
			  var ubilat2 = Number(ubi2);
			  console.log(ubilat2);

			  var ubil2 = -58.377406;
			  var ubilng2 = Number(ubil2);
			  console.log(ubilng2);




			  var myLatLng = {lat: (ubilat2), lng: (ubilng2)};
			  map[id] = new google.maps.Map(document.getElementById(id), { 
			  center: myLatLng,
			  zoom: 12
			  });
			   
			  google.maps.event.addListener(map[id], 'click', function(event) {
					  	if (marca <=1)
					  	{
					  		marca++;
							addMarker(event.latLng, id);
						}  

			     });

		      infoWindow = new google.maps.InfoWindow();
}

function addMarker(location, mapId){
		if (marca <=1){
   			var marker = new google.maps.Marker({
		    position: location,
		    label: labels[labelIndex++ % labels.length],
		    draggable:true,
		    map: map[mapId],
			});
			    google.maps.event.addListener(marker, 'click', function(){
			        openInfoWindow(marker, map[mapId]);
			        agregarCor();
			         
			    });
		}
}

var latBE,lngBE;

function openInfoWindow(marker, mapId) { 
    var markerLatLng = marker.getPosition();
    infoWindow.setContent([
        ' Latitud: ' +
        markerLatLng.lat()+
        '  || Longitud: '+
        markerLatLng.lng()
    ].join(''));
    infoWindow.open(map[mapId], marker);
     latBE=(markerLatLng.lat());
     lngBE=(markerLatLng.lng());
}


function agregarCor(){ 
       
 var exp=
        {
            lat:latBE,
            lng:lngBE,
        };
 i++;
 algo[i]=exp;
        
 var registro = {
    coordinate: algo,
  }

 $.ajax({
            url:url,
            method:'PUT',
            contentType: "application/json",
            data : JSON.stringify(registro
                     ),
            success: function(data){                    
                },
            error: function(){             
                }
            }); 

}