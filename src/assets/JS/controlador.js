function validar()
{
	validarCampoVacio("Codigo");
	validarCampoVacio("Password");
	validarCampoVacio("regCodigo");
	break;
}
//var confirmar=false;

var validarCampoVacio = function(id)
{
	if (document.getElementById(id).value == ""){
		document.getElementById(id).classList.remove("is-valid");
		document.getElementById(id).classList.add("is-invalid");
	}
	else{
		document.getElementById(id).classList.remove("is-invalid");
		document.getElementById(id).classList.add("is-valid");
	}
}

function validarCodigo(etiquetaCodigo)
{
	var patron = /^[0-9]{4}$/;
	if(patron.test(etiquetaCodigo.value))
	{
		etiquetaCodigo.classList.remove("is-invalid");
    	etiquetaCodigo.classList.add("is-valid");
	}
	else
	{
		etiquetaCodigo.classList.remove("is-valid");
    	etiquetaCodigo.classList.add("is-invalid");
	}
}

function validarContrasena(etiqueta){
	if (etiqueta.value.length <6){
		etiqueta.classList.remove("is-valid");
		etiqueta.classList.add("is-invalid");
	}
	else{
		etiqueta.classList.remove("is-invalid");
		etiqueta.classList.add("is-valid");
	}
}

function validarCorreo(etiquetaEmail)
{
	var patron = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(patron.test(String(etiquetaEmail.value).toLowerCase())){
		etiquetaEmail.classList.remove("is-invalid");
    	etiquetaEmail.classList.add("is-valid");
    }else{
    	etiquetaEmail.classList.remove("is-valid");
    	etiquetaEmail.classList.add("is-invalid");
	}
}

var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  var x;
  x=$("#btnGuardar");
  x.click(presionSubmit);
}

function presionSubmit()
{
	alert("Hola");
  /*var v=$("#nro").attr("value");
  $.ajax({
           async:true,
           type: "POST",
           dataType: "html",
           contentType: "application/x-www-form-urlencoded",
           url:"pagina1.php",
           data:"numero="+v,
           beforeSend:inicioEnvio,
           success:llegadaDatos,
           timeout:4000,
           error:problemas
         });*/ 
  return false;
}

function inicioEnvio()
{
  var x=$("#resultados");
  x.html('<img src="../cargando.gif">');
}

function llegadaDatos(datos)
{
  $("#resultados").text(datos);
}

function problemas()
{
  $("#resultados").text('Problemas en el servidor.');
}

/*$("#btnGuardar").click(function()
				{
					var parametros=
					"Codigo="+$("#RCodigo").val()+
					"&Pnombre="+$("#PNombre").val()+
					"&Snombre="+$("#SNombre").val()+
					"&Papellido="+$("#PApellido").val()+
					"&Sapellido="+$("#SApellido").val()+
					"&Telefono="+$("#Telefono").val()+
					"&Password="+$("#RPassword").val()+
					"&Correo="+$("#Correo").val();
					$.ajax({
						url:"../php/procesarusuarios.php",
						method: "POST",
						data: parametros,
						success: function(respuesta)
						{
							alert("Creado");
						}
					});
				});*/