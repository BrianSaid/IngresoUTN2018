/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
	var total
    var conDescuento

    total = parseFloat(document.getElementById("importe").value);

    conDescuento = total * .75;

    document.getElementById("resultado").value = conDescuento.toFixed(2);
}