/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var uno;
    var dos;   
    var suma;

    uno = document.getElementById ("numeroUno").value;
    dos = document.getElementById ("numeroDos").value;

    uno = parseInt (uno);   
    dos = parseInt (dos);   

    suma = (uno + dos);
    
    alert(suma);

}

