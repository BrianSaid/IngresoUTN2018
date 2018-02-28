function Mostrar()
{

{
    var numero;
    var cantDivisores=0;
    var i;

    numero = parseInt(prompt("Ingrese su numero"));
    for(i = 1; i <= numero; i++)
    {
        if(numero % i == 0)
        {
        cantDivisores++;
        console.log(i);
        }

    }
console.log("Se encontraron " + cantDivisores + " divisores del " + numero);
}


}//FIN DE LA FUNCIÓN