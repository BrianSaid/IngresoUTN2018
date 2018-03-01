//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var mes

    mes = prompt("Ingrese un mes");

    switch(mes)
    {
        case "Enero":
        case "Febrero":
        alert("Es veranito!!");
        break;

        default:
        alert("Extraño Enero y Febrero");

        
    }

    

}

