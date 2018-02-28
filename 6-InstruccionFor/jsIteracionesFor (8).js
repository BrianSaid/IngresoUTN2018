function Mostrar()
{
    var numero;
    var i;
    var esPrimo = true;

    numero = parseInt(prompt("Ingrese su numero"));
    for(i = 2; i < numero; i++)
    {
        if(numero % i == 0)
        {
        esPrimo = false;
        break;
        }

    }
if (esPrimo)
{
    alert("El numero " + numero + " es primo");
}
else
{
    alert("El numero " + numero + " no es primo");
}
}




//FIN DE LA FUNCIÓN