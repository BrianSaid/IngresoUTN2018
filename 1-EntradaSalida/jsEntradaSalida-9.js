/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var sueldo;
    var nuevoSueldo;

    sueldo = parseFloat(document.getElementById("sueldo").value);

    nuevoSueldo = sueldo * 1.1;

    document.getElementById("resultado").value = nuevoSueldo.toFixed(2);
}
