 /*var url= 'http://connectedin.herokuapp.com/person/%id%';
        url = url.replace (/%id%/g,id);

templateContainer = $('#templates'),
taskTemplate = '';
templateContainer.find('#todoExperience').load('/templates/template-experience.html', function(tmpl){
	taskTemplate = tmpl;
});

$.get({
	url:url,
	data:{},
	success: users
});


function getTaskHtml(data){

	return taskTemplate
	.replace(/%lugarTrabajo%/g, data.experience.lugarTrabajo)
	.replace(/%cargoTrabajo%/g, data.experience.cargoTrabajo)
	.replace(/%fechaInicioTrabajo%/g, data.experience.fechaInicioTrabajo)
	.replace(/%fechaFinTrabajo%/g, data.experience.fechaFinTrabajo)
	.replace(/%fotoTrabajo%/g, data.experience.fotoTrabajo)
	.replace(/%infoTrabajo%/g, data.experience.infoTrabajo);

}

	

function users(data){


	console.log(data.experience);
	var ruta = '';
	for(var i = 0 ; i < data.experience.length; i++){
		ruta += getTaskHtml(data.experience[i]);
	}
	
	$('#listaPersonas').append(ruta);
}*/