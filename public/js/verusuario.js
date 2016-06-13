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
    .replace(/%experience%/g,' ' + data.experience)
  $( "#template-usuario" ).html(usuario);;
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


/*
function links (id, dataUser) {
   // $('.about')
   // .on('click', cargaAbout (dataUser));
    $('#experience')
    .click(
    function(){
     alert('Click event is fired');
    }
  )
}

*/
changeUser(id);
//links (id, dataUser);
