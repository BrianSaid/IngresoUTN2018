//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numone;
    var numtwo;
    var result;

    numone = parseInt(prompt("Ingrese un numero"));
    numtwo = parseInt(prompt("Ingrese otro numero"));

    if(numone == numtwo)
    {
    result = numone * numtwo;
    }
    else if(numone > numtwo)
    {
    result = numone - numtwo;
    }
    else
    {
    result = numone + numtwo;
    }

document.write ("El resultado es "+ result);
}

