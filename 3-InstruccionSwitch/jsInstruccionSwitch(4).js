function Mostrar()
{
var mesDelAño = document.getElementById('mes').value;

	switch (mesDelAño){
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Abril":
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Tiene 31 dias.");
			break;
		case "Febrero":
			alert("Tiene 28 dias.");
			break;

		default:
			alert("Tiene 30 dias");

		}
	
	



}//FIN DE LA FUNCIÓN