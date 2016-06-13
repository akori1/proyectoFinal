//   $(function(){

//   var form = $('form');
//   var email = form.find('#exampleInputEmail1');
//   var password = form.find('#exampleInputPassword1');

//  form
//   .find('input[type=submit]')
//   .on('click', onClick);

// function onClick(){
     
//      debugger;
    
//   if (email === 'juan' && password === '123') {
//                     alert('Se inicio sesion');
//                     window.location.href = "/";
//                    }
//                    else 
//                    {
//                     alert('error, inicie nuevamente');
//                    }
// }
// })








$(function(){
 var form = $('form'),
  email = form.find('input.email'),
  password = form.find('input.password');

 form
  .find('input[type=submit]')
  .on('click', onClick);


 function onClick(e){

  e.preventDefault ();           
      $.post({
       url:'html/login',
       data:{
        email:email.val(),
        password:password.val()
       },
       success: function(data){
           if (email === 'juan' && password === '123') {
                    console.log('Se inicio sesion');
                    window.location.href = "/";
                   }
                   else 
                   {
                    console.log('error, inicie nuevamente');
                   }
       }

      });
        return false;


}

});