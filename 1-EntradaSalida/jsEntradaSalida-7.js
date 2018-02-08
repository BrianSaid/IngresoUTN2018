/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var uno;	
	var dos;	
	var suma;

		uno = document.getElementById ("numeroUno").value;
    	dos = document.getElementById ("numeroDos").value;

    		uno = parseInt (uno);
    		dos = parseInt (dos);

    	suma = uno + dos;

    alert ("El resultado de la suma " + suma);
}

function restar()
{
	var tres;
	var cuatro;
	var resta;

		tres = document.getElementById ("numeroUno").value;
    	cuatro = document.getElementById ("numeroDos").value;

    		tres = parseInt (tres);
    		cuatro = parseInt (cuatro);

    	resta = tres - cuatro;

    alert ("El resultado de la resta " + resta);
}

function multiplicar()
{ 
	var cinco;
	var seis;
	var multipli;

		cinco = document.getElementById ("numeroUno").value;
    	seis = document.getElementById ("numeroDos").value;

    		cinco= parseInt (cinco);
    		seis= parseInt (seis);

    	multipli = cinco * seis;

    alert ("El resultado de la multiplicacion " + multipli);
}

function dividir()
	
{ 
	var siete;
	var ocho;
	var divi;

		siete = document.getElementById ("numeroUno").value;
    	ocho = document.getElementById ("numeroDos").value;

    		siete= parseInt (siete);
    		ocho= parseInt (ocho);

    	divi = siete / ocho;

    alert ("El resultado de la division " + divi);
}