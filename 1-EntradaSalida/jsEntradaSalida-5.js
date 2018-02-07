/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostrar()
{
    
    var nombre 
    
    var años

    nombre = document.getElementById("elNombre").value;
    /*recordar value tab*/ 
    años = document.getElementById("laEdad").value;

    alert("Su nombre es " + nombre + " y su edad " + años);
}

