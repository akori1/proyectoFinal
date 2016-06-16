var params = [];

var dir = location.search.substr(1, location.search.length).split('&');

for (var i = 0; i < dir.length; i++) {
	var tmpParam = dir[i].split('=');
	params[tmpParam[0]] = tmpParam[1];
}
/* ENCUENTRO EL ID Y LA POS */
var id = params['id'];
var pos = params['pos'];

function editarExperiencia(){
	$('#button')
    .on('click', reemplazarDatos);
		
		function traerDatos(id)
		{
		var url = 'http://connectedin.herokuapp.com/person/%id%';
        url = url.replace (/%id%/g,id);
		$.get({
			url:url,
			data:{},
			success:function(data){
			console.log(data);   
    	$('.fotoTrabajo').val(data.experience[pos].fotoTrabajo);
     	$('.lugarTrabajo').val(data.experience[pos].lugarTrabajo);
     	$('.fechaInicioTrabajo').val(data.experience[pos].fechaInicioTrabajo);
     	$('.fechaFinTrabajo').val(data.experience[pos].fechaFinTrabajo);
     	$('.cargoTrabajo').val(data.experience[pos].cargoTrabajo);
     	$('.infoTrabajo').val(data.experience[pos].infoTrabajo);
   }
  	 });
		}
		   var exp=
       		 {
            fotoTrabajo:$('.fotoTrabajo').val(),
            lugarTrabajo:$('.lugarTrabajo').val(),
            fechaInicioTrabajo:$('.fechaInicioTrabajo').val(),
            fechaFinTrabajo:$('.fechaFinTrabajo').val(),
            cargoTrabajo:$('.cargoTrabajo').val(),
            infoTrabajo:$('.infoTrabajo').val(),
             };
        	data.experience[pos]=exp;
        function reemplazarDatos(data)
        {
        
        $.ajax({
            url:url,
            method:'PUT',
            contentType:"application/json",
            data: JSON.stringify(data),
            success: function(data)
        	{

        	}
        });
	}

traerDatos(id);
reemplazarDatos();
}
editarExperiencia();