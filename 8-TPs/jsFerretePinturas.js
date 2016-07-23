/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{

	//var temp;

	var temp = document.getElementById('Temperatura').value;
	 
	 var fahrenACent = (parseInt(temp) - 32)/1.8;

	 alert( "Centígrados a Fahrenheit: "+ fahrenACent);

	 //f = c*1.8+32
}

function CentigradosFahrenheit () 
{
	

	 var temp = document.getElementById('Temperatura').value;
	 
	 var centAFarenh = parseInt(temp) * 1.8 + 32;

	 alert( "Centígrados a Fahrenheit: " +centAFarenh);
	
}
