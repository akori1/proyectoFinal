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
  if (data.experience.length ==0) {
  var usuario = contenido
    .replace(/%firstName%/g,data.firstName)
    .replace(/%lastName%/g,' ' +data.lastName)
    .replace(/%address%/g,' ' + data.address)
    .replace(/%email%/g,' ' + data.email)
    .replace(/%summary%/g,' ' + data.summary)
    .replace(/%photo%/g,' ' + data.photo)
    .replace(/%experience%/g,' ');

    }else {
    var usuario = contenido
    .replace(/%firstName%/g,data.firstName)
    .replace(/%lastName%/g,' ' +data.lastName)
    .replace(/%address%/g,' ' + data.address)
    .replace(/%email%/g,' ' + data.email)
    .replace(/%summary%/g,' ' + data.summary)
    .replace(/%photo%/g,' ' + data.photo)
    .replace(/%experience%/g,' ' + data.experience[0].cargoTrabajo + ' en ' + data.experience[0].lugarTrabajo);
    
    }
  
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
  $( "#template-about").empty();
 
     $.get( "/templates/template-experience.html", function( contenido ) {
//  $( "#template-usuario" ).html( verUsuario );
 // var verUsuario = data.replace(/%id%/g,id);
// console.log (data);
contenidoHtml = '';
 for(var i = 0 ; i < data.experience.length; i++){
    var usuario = contenido
  .replace(/%lugarTrabajo%/g, data.experience[i].lugarTrabajo)
  .replace(/%cargoTrabajo%/g, data.experience[i].cargoTrabajo)
  .replace(/%fechaInicioTrabajo%/gi, data.experience[i].fechaInicioTrabajo)
  .replace(/%fechaFinTrabajo%/gi, data.experience[i].fechaFinTrabajo)
  .replace(/%fotoTrabajo%/gi, data.experience[i].fotoTrabajo)
  .replace(/%infoTrabajo%/gi, data.experience[i].infoTrabajo)
  .replace(/%id%/gi, data._id)
  .replace(/%pos%/gi, i);
  contenidoHtml += usuario;
  console.log (i);
}
$( "#template-about").html(contenidoHtml);
/*
 var usuario = contenido
  .replace(/%lugarTrabajo%/g, data.experience[0].lugarTrabajo)
  .replace(/%cargoTrabajo%/g, data.experience[0].cargoTrabajo)
  .replace(/%fechaInicioTrabajo%/gi, data.experience[0].fechaInicioTrabajo)
  .replace(/%fechaFinTrabajo%/gi, data.experience[0].fechaFinTrabajo)
  .replace(/%fotoTrabajo%/gi, data.experience[0].fotoTrabajo)
  .replace(/%infoTrabajo%/gi, data.experience[0].infoTrabajo);
  $( "#template-about").html(usuario);*/
// console.log (data);

}) };


function cargaLocation (data) {

$.get("/templates/template-location.html", function( contenido ) {
  var usuario = contenido;
  $("#template-about").html(usuario)
  initMap('map');

  });
}

function cargaMapa (data) {
  
$.get("/templates/template-Map.html", function( contenido ) {
var usuario = contenido;
 $("#template-about").html(usuario)
  initMap2('map2');
})

}


$(document).ready(function() {
  $('body')
  .on('click','#about',  function(e) {
   e.preventDefault();
   cargaAbout(dataUser);
  })
  .on('click','#experience',  function(e) {
   e.preventDefault();
   cargaExperience(dataUser);
  })
  .on('click','#location',  function(e) {
   e.preventDefault();
  marca=0;
   cargaLocation(dataUser);
  })
  .on('click','#mapa',  function(e) {
   e.preventDefault();
  marca=1;
   cargaMapa(dataUser);
  });
});


changeUser(id);
