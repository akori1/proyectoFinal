var dir = location.search;
var dividir = dir.split("=");
var id = dividir[1];

function botonAgregar () {
    $('#button')
    .on('click', agregarExp);

    function agregarExp(e){ 
        e.preventDefault ();
   
     var experience=[
        {
            fotoTrabajo:$('.fotoTrabajo').val(),
            lugarTrabajo:$('.lugarTrabajo').val(),
            fechaInicioTrabajo:$('.fechaInicioTrabajo').val(),
            fechaFinTrabajo:$('.fechaFinTrabajo').val(),
            cargoTrabajo:$('.cargoTrabajo').val(),
            infoTrabajo:$('.infoTrabajo').val(),
        }];
        var url= 'http://connectedin.herokuapp.com/person/%id%';
        url = url.replace (/%id%/g,id);
         
         $.ajax({
    url:url,
    method:'PUT',
    contentType: "application/json",
    data : JSON.stringify(
             experience
             ),
   success: function(data){ 
            alert('Experiencia Agregada'); 
            console.log('CARGO EXPERIENCIA:');
            console.log(experiencia);
        },
   error: function(){
            alert('Faltan ingresar campos');
        }
  }); 
        
    }
};/*
function obtengoFormulario()
{

	var url = 'http://connectedin.herokuapp.com/person/%id%';
        url = url.replace (/%id%/g,id);
        console.log (url);
      $.get(url,function(data){











      })



}*/







botonAgregar();