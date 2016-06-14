// $("#template-usuario").load("/templates/template-verUsuario.html");


var url = location.search;
var dividir = url.split("=");
var id = dividir[1];
var firstName;
var dataUser;
//console.log (id);

function changeUser (id){
    var url= 'http://connectedin.herokuapp.com/person/%id%';
        url = url.replace (/%id%/g,id);
      //  console.log (url);
    $.get(url, function(data){
        dataUser = data;
    replaceUser (data);
    
  }
);
}

function replaceUser (data) {
    $.get( "/templates/template-verUsuario.html", function( contenido ) {
 // $( "#template-usuario" ).html( verUsuario );
 // var verUsuario = data.replace(/%id%/g,id);
 //console.log (data);

 replace (contenido, data);
 //console.log (data);
 cargaAbout (data);
});

}

function replace (contenido ,data) {
  var usuario = contenido
    .replace(/%firstName%/g,data.firstName)
    .replace(/%lastName%/g,' ' +data.lastName)
    .replace(/%address%/g,' ' + data.address)
    .replace(/%email%/g,' ' + data.email)
    .replace(/%summary%/g,' ' + data.summary)
    .replace(/%experience%/g,' ' + data.experience[0].cargoTrabajo + ' en ' + data.experience[0].lugarTrabajo)
    .replace(/%photo%/g,' ' + data.photo)
    
  $( "#template-usuario" ).html(usuario);
}

function cargaAbout (data) {
  $.get( "/templates/template-about.html", function( contenido ) {
  var usuario = contenido
 .replace(/%firstName%/g,data.firstName)
 .replace(/%summary%/g,data.summary)
  $( "#template-about").html(usuario);
 //console.log (data);
 

});}

function cargaExperience (data) {
     $.get( "/templates/template-experience.html", function( contenido ) {
 // $( "#template-usuario" ).html( verUsuario );
 // var verUsuario = data.replace(/%id%/g,id);
 //console.log (data);
 var usuario = contenido
 //.replace(/%firstName%/g,data.firstName)
 //.replace(/%summary%/g,data.summary)
  $( "#template-about").html(usuario);
 //console.log (data);
 

});}

function cargaLocation (data) {
$( "#template-about").empty();
$.get("/templates/template-location.html", function( contenido ) {
  var usuario = contenido;

//.replace(/%firstName%/g,data.firstName)
//.replace(/%summary%/g,data.summary)
 $("#template-about").html(usuario)})
//}}
}

$(document).ready(function() {
  $('body')
  .on('click','#about',  function(e) {
   e.preventDefault();
   cargaAbout(dataUser);
  })
  .on('click','#experience',  function(e) {
   e.preventDefault();
   alert('experience');
  })
  .on('click','#location',  function(e) {
   e.preventDefault();
   cargaLocation(dataUser);
   
  })
  .on('click','#mapa',  function(e) {
   e.preventDefault();
   alert('mapa');
  });
});


changeUser(id);
