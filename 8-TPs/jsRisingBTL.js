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

	edad = prompt("Ingrese su  edad: ");
	parseInt(edad);

		while (edad<18 || edad>90){

			alert("Edad incorrecta...");
			edad = prompt("Ingrese su  edad: ");
			
		}
		document.getElementById('Edad').value = edad;
		alert("Usted ha ingresado: " + edad);
			
		
		sexo = prompt("Ingrese \n “M” para masculino  \n “F” para femenino: ");

		while (sexo != "M" && sexo != "F"){
			alert("Ingrese nuevamente...");
			sexo = prompt("Ingrese \n “M” para masculino  \n “F” para femenino: ");

		}
		if(sexo =="M"){
			document.getElementById('Sexo').value = "Masculino";
			alert("Ha ingresado: Masculino" );


		}else if (sexo == "F"){
			document.getElementById('Sexo').value = "Femenino";
			alert("Ha ingresado: Femenino " );

		}
	
		
	estadoCivil = prompt ("Ingrese:\n1-para soltero.\n2-para casados.\n3-para divorciados.\n4-para viudos.");
	
	var aux = true;
		while(aux){

			switch(estadoCivil){
				case "1": 
					document.getElementById('EstadoCivil').value = "Soltero/a";
					alert("Ha ingresado: Soltero/a " );
					aux = false;
					break;
				case "2": 
					document.getElementById('EstadoCivil').value = "Casado/a";
					alert("Ha ingresado: Casado/a " );
					aux = false;
					break;
				case "3": 
					document.getElementById('EstadoCivil').value = "Divorciado/a";
					alert("Ha ingresado: Divorciado/a " );
					aux = false;
					break;
				case "4": 
					document.getElementById('EstadoCivil').value = "Viudo/a";
					alert("Ha ingresado: Viudo/a " );
					aux = false;
					break;

				default:
					alert("Ingrese la opción correcta...");					
					estadoCivil = prompt ("Ingrese:\n1-para soltero.\n2-para casados.\n3-para divorciados.\n4-para viudos.");
					break;

			}
			
		}
	sueldoBruto = prompt("Ingrese su  sueldo: ");
		while(sueldoBruto < 8000){
			alert("El sueldo requerido es mayor a 8000");
			sueldoBruto = prompt("Ingrese su  sueldo: ");


		}//ver como lograr que no hayan ceros delante. (probar con 001236 que si  lo  sigue validando  :S)
		document.getElementById('Sueldo').value = sueldoBruto;
		alert("Usted ha ingresado: " + sueldoBruto);
		
	legajo = prompt("Ingrese su numero de legajo: ");

		if(legajo <1000 || legajo >9999){
			alert("El legajo debe tener 4 cifras");
			legajo = prompt("Ingrese su numero de legajo: ");
		}
		document.getElementById('Legajo').value= legajo;

		
	nacionalidad = prompt("Ingrese:\n“A”. Argentina.\n“E”. Extranjero.\n“N”. Nacionalizado. ");
	var aux = true;
		while(aux){
			switch(nacionalidad){
				case "A":
					document.getElementById('Nacionalidad').value = "Argentina";
					alert("Ha ingresado Argentina");
					aux = false;
					break;
				case "E":
					document.getElementById('Nacionalidad').value = "Extranjero";
					alert("Ha ingresado Extranjero");
					aux = false;
					break;
				case "N":
					document.getElementById('Nacionalidad').value = "Nacionalizado";
					alert("Ha ingresado Nacionalizado");
					aux = false;
					break;
				default:
					
					alert("Ingreso incorrecto...");
					nacionalidad = prompt("Ingrese:\n“A”. Argentina.\n“E”. Extranjero.\n“N”. Nacionalizado. ");
					aux = true;
					break;

			}


		}

	
 
}
