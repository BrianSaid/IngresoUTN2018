function Mostrar()
{

	var positivo=0;
	var negativo=1;
	var respuesta='s';
	var numero
/*Asignamos un valor*/
	var flag = 0;
do
{
	numero = parseInt (prompt("Ingrese un numero: "));
	if (numero >= 0)
	{
		positivo = positivo + numero
	}
	else
	{
		negativo = negativo * numero
		flag = 1;
	}
	respuesta = prompt ("Desea continuar?:")
}
while (respuesta == 's')

/*indicamos que si no pasa por negativo se declara a su valor*/
if(flag == 0)
{
	negativo = 0

}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN