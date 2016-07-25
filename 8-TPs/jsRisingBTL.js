/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	var edad;
	var sexo;
	var estadoCivil;
	var sueldoBruto;
	var legajo;
	var nacionalidad;
	//var opcion;

	edad = prompt("Ingrese su  edad: ");
	parseInt(edad);

	while (edad<18 || edad>90){

		alert("Edad incorrecta...");
		edad = prompt("Ingrese su  edad: ");
		
	}
	document.getElementById('Edad').value = edad;
		
	
	sexo = prompt("Ingrese \n “M” para masculino  \n “F” para femenino: ");

	while (sexo != "M" && sexo != "F"){
		alert("Ingrese nuevamente...");
		sexo = prompt("Ingrese \n “M” para masculino  \n “F” para femenino: ");

	}
	if(sexo =="M"){
		document.getElementById('Sexo').value = "Masculino";


	}else if (sexo == "F"){
		document.getElementById('Sexo').value = "Femenino";
	}
	
		
	estadoCivil = prompt ("Ingrese:\n1-para soltero.\n2-para casados.\n3-para divorciados.\n4-para viudos.");
	parseInt(estadoCivil);

	switch(estadoCivil){
		case 1: 
			document.getElementById('EstadoCivil').value = "Soltero";
			break;


	}
		/*sueldoBruto = prompt("Ingrese su  sueldo: ");
		legajo = prompt("Ingrese su numero de legajo: ");
		nacionalidad = prompt("Ingrese:\n“A”. Argentina.\n“E”. Extranjero.\n“N”. Nacionalizado. ");*/

	
 
}
