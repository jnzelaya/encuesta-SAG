$(document).ready(function() {
	function llenar_municipios(){
		$.post( "server/llenar_cmb_municipios_zonas_codigos.php", { "llenar_municipios" : "true" }, function( data ) {
	  		var municipios = JSON.parse(data);
	  		alert(municipios);
		});
	}
			
});