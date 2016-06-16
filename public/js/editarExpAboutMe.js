var params = [];

var dir = location.search.substr(1, location.search.length).split('&');

for (var i = 0; i < dir.length; i++) {
    var tmpParam = dir[i].split('=');
    params[tmpParam[0]] = tmpParam[1];
}
/* ENCUENTRO EL ID Y LA POS */
var id = params['id'];
var pos = params['pos'];
        var url = 'http://connectedin.herokuapp.com/person/%id%';
        url = url.replace (/%id%/g,id);
var array=[];
function editarExperiencia(e){
    traerDatos(id); 
    traerRegistro(id);  
    $('#button')
    .on('click', reemplazarDatos);
        function traerDatos(id)
        {
        $.get({
            url:url,
            data:{},
            success:function(data){
            console.log(data);   
        $('#fotoTrabajo').val(data.experience[pos].fotoTrabajo);
        $('.lugarTrabajo').val(data.experience[pos].lugarTrabajo);
        $('.fechaInicioTrabajo').val(data.experience[pos].fechaInicioTrabajo);
        $('.fechaFinTrabajo').val(data.experience[pos].fechaFinTrabajo);
        $('.cargoTrabajo').val(data.experience[pos].cargoTrabajo);
        $('.infoTrabajo').val(data.experience[pos].infoTrabajo);
        
   }
     });
        }
        function traerRegistro(id)
        {
            $.get({
                url:url,
                data:{},
                success:function(data)
                {
                    array=data.experience;
                    console.log(array);
                }
            })


        }            
        function reemplazarDatos(e)
        {
        
    e.preventDefault();
        
           var exp=
             {
            fotoTrabajo:$('#fotoTrabajo').val(),
            lugarTrabajo:$('.lugarTrabajo').val(),
            fechaInicioTrabajo:$('.fechaInicioTrabajo').val(),
            fechaFinTrabajo:$('.fechaFinTrabajo').val(),
            cargoTrabajo:$('.cargoTrabajo').val(),
            infoTrabajo:$('.infoTrabajo').val(),
             };
             array[pos]=exp;
             console.log(exp);
     var registro = {
            firstName : $('.firstName').val(),
            lastName : $('.lastName').val(),                     
            address : $('.address').val(),
            photo : $('.photo').val(),
            email : $('.email').val(),
            education:$('.education').val(),
            summary:$('.summary').val(), 
            experience:array,
        }
       // registro.experience[pos]=exp;
        $.ajax({
            url:url,
            method:'PUT',
            contentType:"application/json",
            data: JSON.stringify(registro),
            success: function(data)
            {
                    alert('EXPERIENCIA MODIFICADA');
            }
        });
    }

//reemplazarDatos();
}
//traerDatos(id);
editarExperiencia();