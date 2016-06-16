(function (){

 /**
 * Inicializa el módulo
 **/

 var $form;

 function init(){
 	$form = $('form');
 	setupListeners();
 }

 function setupListeners(){
 	$form.on('submit', onFormSubmit);
 }

 function onFormSubmit(e){
 	e.preventDefault();
 	var serializeData = $form.serializeArray(),
 	data = {};
 	
 	serializeData.forEach(function (keyValue) {
 		data[keyValue.name] = keyValue.value;
 	});

 	service.createUser(data)
 	
 }

 init();

}());

var service = (function (){
	
	var CREATE_URL = 'http://connectedin.herokuapp.com/person';

	function createUser(user){
		$.ajax({
			url:'http://connectedin.herokuapp.com/person/',
			method:'POST',
			contentType: "application/json",
			data : JSON.stringify(
				user
				),
			success: function(data){ 
				alert('Te registraste correctamente'); 
				location.href="/html/grilla.html";
			},
			error: function(){
				alert ('Faltan ingresar campos');
			}
		}); 
	}


	return {
		createUser: createUser
	}

}());


	 // function emailValidator(email)
	 // {
	 // 	return /.+@.+/.test(email);
	 // }