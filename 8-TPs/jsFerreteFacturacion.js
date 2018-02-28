/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{
    var uno;	
	var dos;
    var tres;	
	var total;

        uno = parseFloat(document.getElementById ("PrecioUno").value);
        dos = parseFloat(document.getElementById ("PrecioDos").value);
        tres = parseFloat(document.getElementById ("PrecioTres").value);

    total = uno + dos + tres;

    alert ("El resultado de la suma es " + total);

	
}
function Promedio () 
{
    var uno;	
	var dos;
    var tres;	
	var total;
    var promedio;

        uno = parseFloat(document.getElementById ("PrecioUno").value);
        dos = parseFloat(document.getElementById ("PrecioDos").value);
        tres = parseFloat(document.getElementById ("PrecioTres").value);

    total = uno + dos + tres;

    promedio = total / 3;

    alert ("El resultado del promedio es " + promedio.toFixed(2));

}
function PrecioFinal () 
{
    var uno;	
	var dos;
    var tres;	
	var total;
    var precioMasIva;

        uno = parseFloat(document.getElementById ("PrecioUno").value);
        dos = parseFloat(document.getElementById ("PrecioDos").value);
        tres = parseFloat(document.getElementById ("PrecioTres").value);

    total = uno + dos + tres;

    precioMasIva = total * 1.21;

    alert ("El resultado del promedio es " + precioMasIva);
	
}