//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var sexo;
    var notas;
    var promedio=0;
    var varonesMas6=0;
    var flag=0;
    var acumNotas;
    var notaBaja

    for(var i = 0; i < 6; i++)
    {
        notas = parseInt(prompt("Ingrese la nota: "));

        while (notas < 0 || notas > 10)
        {
            notas = parseInt(prompt("Error. nota tiene que estar entre 0 y 10. Reingrese nota:"));

        }
        
        sexo = prompt ("Ingrese el sexo: ");

        while (sexo != 'f' && sexo != 'm')
        {
            sexo = prompt("Error. El sexo debe ser m o f. Reingrese sexo");
        }

        acumNotas += notas;

        if(notas < notaBaja || flag ==0)
        {
            notaBaja = notas;
            flag = 1;
        }

        if(sexo == 'm' && notas >= 6 )
        {
            varonesMas6++;
        }

    }

    promedio = acumNotas / 6;

    alert("Promedio de notas: " + promedio + "\nNota mas baja: "+ notaBaja + "\nVarones con nota mayor a 6: " + varonesMas6);
}

