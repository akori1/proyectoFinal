templateContainer = $('#templates'),
taskTemplate = '';
templateContainer.find('#todoTemplate').load('/templates/templateGrilla.html', function(tmpl){
	taskTemplate = tmpl;
});



$.get({
	url:'http://connectedin.herokuapp.com/person',
	success: users
});


function getTaskHtml(data){

	return taskTemplate
	.replace(/%id%/g, data._id)
	.replace(/%photo%/g, data.photo)
	.replace(/%firstName%/gi, data.firstName)
	.replace(/%lastName%/gi, data.lastName)
	.replace(/%gender%/gi, data.gender)
	.replace(/%birthday%/gi, data.birthday)
	.replace(/%address%/gi, data.address)
	.replace(/%email%/gi, data.email)
	.replace(/%password%/gi, data.password)
	.replace(/%summary%/gi, data.summary);

}

	

function users(data){
	var ruta = '';
	for(var i = 0 ; i < data.length; i++){
		ruta += getTaskHtml(data[i]);
	}
	
	$('#listaPersonas').append(ruta);
}


