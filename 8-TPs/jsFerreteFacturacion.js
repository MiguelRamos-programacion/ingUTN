/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/




function Sumar () 
{
			//var precioUno;
	//var precioDos;
	//var precioTres;

	//precioUno = prompt("Ingrese precio uno: ");
	var precioUno = document.getElementById('PrecioUno').value;

	//precioDos = prompt("Ingrese precio dos: ");
	var precioDos = document.getElementById('PrecioDos').value;

	//precioTres = prompt("Ingrese precio tres: ");
	var precioTres = document.getElementById('PrecioTres').value;
	suma = parseInt(precioUno) + parseInt(precioDos) + parseInt(precioTres) ;

		alert("La suma de los productos es: " + suma);
}
function Promedio () 
{
	var precioUno = document.getElementById('PrecioUno').value;

	var precioDos = document.getElementById('PrecioDos').value;

	var precioTres = document.getElementById('PrecioTres').value;
	promedio =( parseInt(precioUno) + parseInt(precioDos) + parseInt(precioTres))/3 ;

		alert("La suma de los productos es: " + promedio);
	
}

function PrecioFinal () 
{
	var precioUno = document.getElementById('PrecioUno').value;

	var precioDos = document.getElementById('PrecioDos').value;

	var precioTres = document.getElementById('PrecioTres').value;

	suma = parseInt(precioUno) + parseInt(precioDos) + parseInt(precioTres) ;

	var aumento = (21*suma)/100 ;
	precioFinal = aumento + suma;

		alert("La suma de los productos es: " + precioFinal);
	
}

