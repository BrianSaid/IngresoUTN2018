function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
	var nota;

	nota = Math.floor (Math.random() * 10) + 1;

if (nota <4)
{
    alert(nota + " Desaprobo");
}
else if (nota <9)
{
    alert(nota + " Aprobo");
}
else
{
    alert(nota + " Excelente")
}

}//FIN DE LA FUNCIÓN n  