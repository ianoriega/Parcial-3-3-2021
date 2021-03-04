function mostrar()
{
	var continuar;
	var nombrePasajero;
	var validarNombrePasajero;
	var estadoCivilPasajero;
	var edadPasajero;
	var temperaturaCorporalPasajero;
	var sexoPasajero;
	var contadorViudoSesenta;
	var edadSolteraMasJoven;
	var mujerSolteraJoven;
	var contadorSolteraJoven;
	var contadorTotalPasajeros;
	var precioSinDescuento;
	var contadorMasSesenta;
	var precioConDescuento;

	contadorViudoSesenta = 0;
	contadorSolteraJoven = 0;
	contadorTotalPasajeros = 0;
	contadorMasSesenta = 0;

	do
	{
		do
		{
			nombrePasajero = prompt("Ingrese el nombre del pasajero");
			validarNombrePasajero = isNaN(nombrePasajero);
		}while(validarNombrePasajero == false);

		do
		{
			estadoCivilPasajero = prompt("Ingrese el estado civil: soltero, casado, viudo");
		}while(estadoCivilPasajero != "soltero" && estadoCivilPasajero != "casado" && estadoCivilPasajero != "viudo");

		do
		{
			edadPasajero = prompt("Ingrese su edad");
			edadPasajero = parseInt(edadPasajero);
		}while(edadPasajero > 17);

		do
		{
			temperaturaCorporalPasajero = prompt("Ingrese su temperatura corporal");
			temperaturaCorporalPasajero = parseInt(temperaturaCorporalPasajero);
		}while(temperaturaCorporalPasajero <15 || temperaturaCorporalPasajero >50);

		do
		{
			sexoPasajero = prompt("Ingrese el sexo: femenino, masculino, no binario");
		}while(sexoPasajero != "femenino" && sexoPasajero != "masculino" && sexoPasajero != "no binario");

		if(estadoCivilPasajero == "viudo" && edadPasajero > 60)
		{
			contadorViudoSesenta ++;
		}

		if(sexoPasajero == "femenino")
		{
			if(edadSolteraMasJoven > edadPasajero)
			{
				edadSolteraMasJoven = edadPasajero;
				mujerSolteraJoven = nombrePasajero;
			}
			else if(contadorSolteraJoven == 0)
			{
				edadSolteraMasJoven = edadPasajero;
				mujerSolteraJoven = nombrePasajero;
			}
			contadorSolteraJoven++;
		}

		if(edadPasajero > 60)
		{
			contadorMasSesenta++;
		}

		contadorTotalPasajeros ++;

		continuar = confirm("desea continuar cargando?");
	}while(continuar == true);

	precioSinDescuento = 600*contadorTotalPasajeros;
	
	if((contadorTotalPasajeros / 2) < contadorMasSesenta)
	{
		precioConDescuento = precioSinDescuento - (precioSinDescuento *0.25);
		
	}

	


	document.write("La cantidad de viudos de mas de 60 es: " + contadorViudoSesenta);
	document.write("<br> El nombre de la mujer soltera mas joven es: "+ mujerSolteraJoven);
	document.write("<br> Y la edad es: " + edadSolteraMasJoven);
	document.write("<br> El precio total del viaje sin descuento es: " + precioSinDescuento);
	document.write("<br>")


}
