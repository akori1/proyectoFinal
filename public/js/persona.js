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
		  		return $.post({
		  			url: CREATE_URL,
		  			data: JSON.stringify(user),
		  			contentType: 'application/json'
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