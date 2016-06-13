function validarLogin()
{
    var varUsuario= $("#exampleInputEmail1").val();
    var varClave= $("#exampleInputPassword1").val();
     
   


  if (varUsuario === 'juan' && varClave === '123') {
                    alert('Se inicio sesion');
                    window.location = "index.html";
                   }
                   else 
                   {
                    alert('error, inicie nuevamente');
                   }
                 
}









// $(function(){
//  var form = $('form'),
//   email = form.find('input.email'),
//   password = form.find('input.password');

//  form
//   .find('input[type=submit]')
//   .on('click', onClick);


//  function onClick(e){

//   e.preventDefault ();           
//       $.post({
//        url:'public/html/login',
//        data:{
//         email:email.val(),
//         password:password.val()
//        },
//        success: function(data){
//            if (email === 'juan' && password === '123') {
//                     console.log('Se inicio sesion');
//                     window.location.href = "/";
//                    }
//                    else 
//                    {
//                     console.log('error, inicie nuevamente');
//                    }
//        }

//       });
//         return false;


// }

// });