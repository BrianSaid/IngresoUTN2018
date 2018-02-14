function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

    switch (mesDelAño) 
    {
        case "Enero":
        case "Febrero":
        case "Marzo":
        case "Abril":
        case "Junio":

        alert ("Falta para el Invierno");
        break;

        case "Julio":
        case "Agosto":
        alert ("Abrigate que hace frio!");
        break;

        case "Septiembre":
        case "Octumbre":
        case "Noviembre":
        case "Diciembre":
        alert ("Ya pasamos el frio, ahora hace calor!");
        break;
    }







}//FIN DE LA FUNCIÓN