var dir = location.search;
var dividir = dir.split("=");
var id = dividir[1];
  var url= 'http://connectedin.herokuapp.com/person/%id%';
        url = url.replace (/%id%/g,id);
   
 
$.get({
  url:url,
  data:{},
  success:function(data){
    console.log('traje datos',data);
  }
});


     


function initMap2(id) {

  var ubi = 0;
  var ubil = 0;
  var ubilat = 0;

  if(dataUser.coordinate[0]){
    ubi = dataUser.coordinate[0]['lat'];
    ubil = dataUser.coordinate[0]['lng'];   

  } else {
    ubi = dataUser.coordinate['lat']
    ubil = dataUser.coordinate['lng']
  }

  var ubilat = Number(ubi);
  var ubilng = Number(ubil); 
  
  //var myLatLng = {lat: 12, lng: 12};
  var myLatLng = {lat: (ubilat), lng: (ubilng)};
  
  var map = new google.maps.Map(document.getElementById(id), {
    zoom: 4,
    center: myLatLng
  });

  var contentString = ('Nombre: '+ dataUser.firstName + '<br>Apellido: ' + dataUser.lastName +'<br>Direccion: '+ dataUser.address);

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });


  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}










        
         
    
 
    