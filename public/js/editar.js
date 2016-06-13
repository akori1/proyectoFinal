var dir = location.search;
var dividir = dir.split("=");
var id = dividir[1];
var registro;
 changeUser(id);

var form = $('.container');
function botonEditar () {
    $('form')
    .on('submit', modificar);

    function modificar(e){ 
        e.preventDefault ();
     
      registro = {
            firstName : $('.firstName').val(),
            lastName : $('.lastName').val(),                     
            address : $('.address').val(),
            photo : $('.photo').val(),
            email : $('.email').val(),
            education:$('.education').val(),
            experience:$('.experience').val()
        }
         var url= 'http://connectedin.herokuapp.com/person/%id%';
        url = url.replace (/%id%/g,id);
         
         $.ajax({
    url:url,
    method:'PUT',
    contentType: "application/json",
    data : JSON.stringify(
             registro
             ),
   success: function(data){ 
            alert('Usuario Modificado'); 
            location.href="grilla.html";

        },
        error: function(){
            alert('Faltan ingresar campos');
        }
     
  });  
        
    }
};


function changeUser (id){
  
    console.log(id);
    

    var url = 'http://connectedin.herokuapp.com/person/%id%';
        url = url.replace (/%id%/g,id);
        console.log (url);
    $.get(url, function(data){
     console.log(data);
     
     $('.firstName').val(data.firstName);
     $('.lastName').val(data.lastName);
     $('.address').val(data.address);
     $('.email').val(data.email);
     $('.education').val(data.education);
     $('.experience').val(data.experience);
    $('.photo').val(data.photo);
 

   });

 
  

    function generarEditarHtml (usuario){    
    return editarTemplate
    .replace (/%firstName%/g,usuario.firstName)
    .replace (/%lastName%/g,usuario.lastName)
    .replace (/%gender%/g,usuario.gender)
    .replace (/%birthday%/g,usuario.birthday)
    .replace (/%address%/g,usuario.address)
    .replace (/%photo%/g,usuario.photo)
    .replace (/%email%/g,usuario.email)
    .replace (/%botonEditar%/g,usuario._id);
}

}


botonEditar();
