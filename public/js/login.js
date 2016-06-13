
function boton () {
    $('form')
    .on('submit', validarLogin)};


function validarLogin(e)
{
    var varUsuario= $("#exampleInputEmail1").val();
    var varClave= $("#exampleInputPassword1").val();
    e.preventDefault(); 
   
console.log('entre aca');

  if (varUsuario === 'juan' && varClave === '123') {
                    alert('Se inicio sesion');
                    location.href="/index.html";
                   }
                   else 
                   {
                    alert('error, inicie nuevamente');
                   }
                 
}



boton();


