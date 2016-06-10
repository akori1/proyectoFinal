$("#template-usuario").load("/templates/template-verUsuario.html");

var url = location.search;
var dividir = url.split("=");
var id = dividir[1];
var firstName;
console.log (id);

function changeUser (id){
    var url= 'http://connectedin.herokuapp.com/person/%id%';
        url = url.replace (/%id%/g,id);
        console.log (url);
    $.get(url, function(data){
     
     console.log (data);
     
     var firstName = $('firstName').val(data.firstName);
     $('.lastName').val(data.lastName);
     $('.address').val(data.address);
     $('.email').val(data.email);
     $('.education').val(data.education);
     $('.experience').val(data.experience);
    $('.photo').val(data.photo);
  });
}

changeUser(id);

