/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoTerreno;
	var anchoTerreno;
	var radioTerreno;

	largoTerreno = document.getElementById('Largo').value;
	anchoTerreno = document.getElementById('Ancho').value;
	radioTerreno = document.getElementById('Radio').value;

	perimetro =2* (parseInt(largoTerreno) + parseInt(anchoTerreno));
	cantAlambre = perimetro *3;
	alert("La cantidasd de alambre a mostrar es: " + cantAlambre);
	





}
function Circulo () 
{
	var largoTerreno;
	var anchoTerreno;
	var radioTerreno;

	largoTerreno = document.getElementById('Largo').value;
	anchoTerreno = document.getElementById('Ancho').value;
	radioTerreno = document.getElementById('Radio').value;

	radTerreno = (2*3.14)* radioTerreno;
	alert("El radio es: " + radTerreno);
	
}
function Materiales () 
{
	var largoTerreno;
	var anchoTerreno;		

	largoTerreno = document.getElementById('Largo').value;
	anchoTerreno = document.getElementById('Ancho').value;

	var superficie = parseInt (largoTerreno) * parseInt(anchoTerreno);
	

	var cantCemento = superficie * 2;
	var cantCal = superficie *3;

	alert ("Cantidad cemento: "+ cantCemento);
	alert("Cantidad cal: " +  cantCal);



	
}