var dir = location.search;
var dividir = dir.split("=");
var id = dividir[1];
var url= 'http://connectedin.herokuapp.com/person/%id%';
        url = url.replace (/%id%/g,id);
var algo=[];
var i=-1;
//var iModificar;
function botonAgregar () {
    traer_Datos(id);
    
    $('#button')
    .on('click', agregarExp);

    function traer_Datos(id){
        $.get({
            url:url,
            data:{       
             },
         success:function(data){
          console.log(data.experience.length)
         i=data.experience.length;
        // iModificar=i;
          algo=data.experience;
          }  

        });
    }

    function agregarExp(e){ 
        e.preventDefault ();
     var exp=
        {
            fotoTrabajo:$('.fotoTrabajo').val(),
            lugarTrabajo:$('.lugarTrabajo').val(),
            fechaInicioTrabajo:$('.fechaInicioTrabajo').val(),
            fechaFinTrabajo:$('.fechaFinTrabajo').val(),
            cargoTrabajo:$('.cargoTrabajo').val(),
            infoTrabajo:$('.infoTrabajo').val(),
        };
       algo[i]=exp;
        console.log('imprime antes del put',algo[i]);
     

      var registro = {
            firstName : $('.firstName').val(),
            lastName : $('.lastName').val(),                     
            address : $('.address').val(),
            photo : $('.photo').val(),
            email : $('.email').val(),
            education:$('.education').val(),
            experience:algo
        }
        

        
        
         $.ajax({
            url:url,
            method:'PUT',
            contentType: "application/json",
            data : JSON.stringify(registro
                     ),
           success: function(data){ 
                    alert('Experiencia Agregada'); 
                    console.log('CARGO EXPERIENCIA:');
                    console.log(exp);
                  //  console.log(data);
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