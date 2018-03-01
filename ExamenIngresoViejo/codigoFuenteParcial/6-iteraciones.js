//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var venta;
    var ventaM;
    var ventaMe;
    var flag=0;

    for ( var i=1; i <= 3; i++)
    {
        venta = parseFloat (prompt("Ingrese importe venta:"));

        while (venta <=0)
        {
            venta = parseFloat(prompt("Error. El importe de venta ingresado debe ser mayor a 0. Reingrese cantidad de ventas"));
        }
        if (venta > ventaM || flag == 0)
        {
            ventaM = venta;
        }
        if ( venta < ventaMe || flag == 0)
        {
            ventaMe = venta;
            flag = 1;
        }
    }
    alert ("La mayor venta fue $ s" + ventaM + " y la venta menor $ " + ventaMe );
}

