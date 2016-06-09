templateContainer = $('#templates'),
taskTemplate = '';
templateContainer.find('#todoTemplate').load('/public/templates/templateGrilla.html', function(tmpl){
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
	.replace(/%password%/gi, data.password);

}

	

function users(data){
	var ruta = '';
	for(var i = 0 ; i < data.length; i++){
		ruta += getTaskHtml(data[i]);
	}
	
	$('#listaPersonas tbody').append(ruta);
	$('#listaPersonas tbody').on("click", "button", function () {
		url = "public/html/editar.html";
      	var id =($(this).attr("data-id"));
      	$(location).attr("href", url);
	})
}


function changeUser (){
          console.log($(this).data('id'));
          var persona = [{firstName: 'CAMBIO N', lastName: 'CAMBIO A'}];

          $.ajax({
          url: 'https://connectedin.herokuapp.com/person/' + $(this).data('id'),
          method: 'PUT',
          data: JSON.stringify(persona),
          contentType:'application/json'
        })
        }
