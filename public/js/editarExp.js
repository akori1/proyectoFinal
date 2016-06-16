var dir = location.search;
var dividir = dir.split("=");
var id = dividir[1];
var url= 'http://connectedin.herokuapp.com/person/%id%';
        url = url.replace (/%id%/g,id);
var algo=[];
var dataUser;
var i=-1;

function botonAgregar () {
    traer_Datos(id);
    console.log(i);
    $('#button')
    .on('click', agregarExp);
    

    function traer_Datos(id){
        $.get({
            url:url,
            data:{       
             },
         success:function(data){
          console.log(data);
          dataUser=data.experience;
          console.log(dataUser);
          algo=dataUser;
          i=data.experience.length-1;
         

          }  

        });
    }

    function agregarExp(e){ 
        console.log(algo);
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
       
       
     

      var registro = {
            firstName : $('.firstName').val(),
            lastName : $('.lastName').val(),                     
            address : $('.address').val(),
            photo : $('.photo').val(),
            email : $('.email').val(),
            education:$('.education').val(),
            experience:algo
        }
        
        if(exp.fotoTrabajo.length>0 && exp.lugarTrabajo.length>0 && exp.fechaInicioTrabajo.length>0 &&
        exp.fechaFinTrabajo.length>0 && exp.cargoTrabajo.length>0 && exp.infoTrabajo.length>0) 
        {
           i++ 
           algo[i]=exp;
           console.log(i);
           console.log('imprime antes del put',algo[i]);


          $.ajax({     
            url:url,
            method:'PUT',     
            contentType: "application/json",     
            data : JSON.stringify(registro),
            success: function(data){
                                   alert('Experiencia Agregada'); 
                                                                     
                              },
          }); 
        }
        else
        {
          alert('Faltan ingresar campos');
        }
    }
};

botonAgregar();
