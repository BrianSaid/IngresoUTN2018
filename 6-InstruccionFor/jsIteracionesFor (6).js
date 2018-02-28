function Mostrar()
{
    var numero;
    var cantPares=0;
    var i;

    numero = parseInt(prompt("Ingrese su numero"));
    for(i = 1; i <= numero; i++)
    {
        if(i % 2 == 0)
        {
        cantPares++;
        console.log(i)
        }

    }
console.log("Se encontraron " + cantPares + " par")
}

//FIN DE LA FUNCIÓN