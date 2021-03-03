
function mostrar()
{
	var i;
	var nombreTipoProducto;
	var precioProducto;
	var cantidadUnidades;
	var tipoInflamable;
	var marcaInflamable;
	var validarMarcaInflamable;
	var promedioAlcohol;
	var promedioIac;
	var promedioQuat;
	var cantidadTotalUnidades;
	var cantidadTotalAlcohol;
	var cantidadTotalIac;
	var cantidadTotalQuat;
	var cantidadInifugo;
	var cantidadCombustible;
	var cantidadExplosivo;
	var inflamableMayor;
	var cantidadIacMenor200;
	var precioProductoMasCaro;
	var tipoProductoMasCaro;
	var marcaProductoMasCaro;

	cantidadTotalUnidades = 0;
	cantidadTotalAlcohol = 0;
	cantidadTotalIac = 0;
	cantidadTotalQuat = 0;
	cantidadInifugo = 0;
 	cantidadCombustible = 0;
	cantidadExplosivo = 0;
	cantidadIacMenor200 = 0;


	for(i = 0; i <5; i++)
	{
		do
		{
			nombreTipoProducto = prompt("Ingrese el tipo de producto: ALCOHOL / IAC / QUAT");			
		}while(nombreTipoProducto != "ALCOHOL" && nombreTipoProducto != "IAC" && nombreTipoProducto != "QUAT");
		
		do
		{
			precioProducto = prompt("Ingrese el precio del producto");
			precioProducto = parseInt(precioProducto);
		}while(precioProducto < 100 || precioProducto > 300);

		do
		{
			cantidadUnidades = prompt("Ingrese la cantidad de unidades");
			cantidadUnidades = parseInt(cantidadUnidades);
		}while(cantidadUnidades < 1 || cantidadUnidades >1000);

		do
		{
			tipoInflamable = prompt("Ingrese el tipo de inflamable: inifugo / combustible / explosivo");
		}while(tipoInflamable != "inifugo" && tipoInflamable != "combustible" && tipoInflamable != "explosivo");

		do
		{
			marcaInflamable = prompt("Ingrese la marca del inflamable");
			validarMarcaInflamable = isNaN(marcaInflamable);
		}while(validarMarcaInflamable == false);

		cantidadTotalUnidades = cantidadTotalUnidades + cantidadUnidades;

		switch(nombreTipoProducto)
		{
			case "ALCOHOL":
				cantidadTotalAlcohol = cantidadTotalAlcohol + cantidadUnidades;
			break;
			case "IAC":
				cantidadTotalIac = cantidadTotalIac + cantidadUnidades;
			break;
			case "QUAT":
				cantidadTotalQuat = cantidadTotalQuat + cantidadUnidades;
			break;
		}	

		switch(tipoInflamable)
		{
			case "inifugo":
				cantidadInifugo = cantidadInifugo + cantidadUnidades;
			break;
			case "combustible":
				cantidadCombustible = cantidadCombustible + cantidadUnidades;
			break;
			case "explosivo":
				cantidadExplosivo = cantidadExplosivo + cantidadUnidades;
			break;
		}

		if(nombreTipoProducto == "IAC" && precioProducto <= 200)
		{
			cantidadIacMenor200 = cantidadIacMenor200 + cantidadUnidades;
		}

		if(i == 0)
		{
			precioProductoMasCaro = precioProducto;
		}
		if(precioProducto > precioProductoMasCaro)
		{
			precioProductoMasCaro = precioProducto;
			tipoProductoMasCaro = nombreTipoProducto;
			marcaProductoMasCaro = marcaInflamable;
		}
	
	}

	promedioAlcohol =  cantidadTotalUnidades / cantidadTotalAlcohol ;
	promedioIac = cantidadTotalUnidades / cantidadTotalIac;
	promedioQuat = cantidadTotalUnidades / cantidadTotalQuat;

	if(cantidadInifugo > cantidadCombustible && cantidadInifugo > cantidadExplosivo)
	{
		inflamableMayor = "inifugo";
	}
	else if(cantidadCombustible > cantidadInifugo && cantidadCombustible > cantidadExplosivo)
	{
		inflamableMayor = "combustible";
	}
	else if(cantidadExplosivo > cantidadInifugo && cantidadExplosivo > cantidadCombustible)
	{
		inflamableMayor = "explosivo";
	}
	else
	{
		inflamableMayor = "Hay inflamables con la misma cantidad de unidades";
	}

	document.write("EL promedio de cantidad por tipo de producto es:");
	document.write("<br> ALCOHOL: " + promedioAlcohol);
	document.write("<br> IAC: " + promedioIac);
	document.write("<br> QUAT: " + promedioQuat);
	document.write("<br>");
	document.write("<br> El inflamable con mas cantidad de unidades de la compra es: " + inflamableMayor);
	document.write("<br>");
	document.write("<br> La cantidad de unidades de IAC precio -200 es igual a: " + cantidadIacMenor200);
	document.write("<br>");
	document.write("<br> La marca del mas caro de los productos es: "+ marcaProductoMasCaro + "    Y el tipo del producto mas caro es: " + tipoProductoMasCaro);

}
