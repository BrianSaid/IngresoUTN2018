/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostrar()
{
    /*variable nombre*/ 
	var nombre;
    
    /*value te da agarra el valor del llamado a elementid en HTML*/
    nombre = document.getElementById("elNombre").value; 

    /*Pop up que indica el nombre*/
    alert(nombre);
}


