// $("#template-usuario").load("/templates/template-verUsuario.html");


var url = location.search;
var dividir = url.split("=");
var id = dividir[1];
var firstName;
//console.log (id);

function changeUser (id){
    var url= 'http://connectedin.herokuapp.com/person/%id%';
        url = url.replace (/%id%/g,id);
      //  console.log (url);
    $.get(url, function(data){
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
});

}

function replace (contenido ,data) {
  var usuario = contenido
    .replace(/%firstName%/g,data.firstName)
    .replace(/%lastName%/g,' ' +data.lastName)
    .replace(/%address%/g,' ' + data.address)
    .replace(/%email%/g,' ' + data.email)
  $( "#template-usuario" ).html(usuario);;
}

changeUser(id);

