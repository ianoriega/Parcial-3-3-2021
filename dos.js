function mostrar()
{
	var continuar;
	var nombreAlumno;
	var validarNombreAlumno;
	var tipoCursada;
	var cantidadMaterias;
	var sexoAlumno;
	var notaPromedio;
	var edad;
	var validarEdad;
	var mejorPromedio;
	var contadorMejorPromedio;
	var nombreMejorPromedio;
	var edadLibreMasBaja;
	var contadorLibreMasBaja;
	var nombreLibreMasJoven;
	var promedioMasculinos;
	var notasTotalMasculinos;
	var promedioFemeninos;
	var notasTotalFemeninos;
	var promedioNoBinarios;
	var notasTotalNoBinarios;
	var alumnoMasMaterias;
	var edadMasMaterias;
	var masMaterias;
	var contadorMasMaterias;


	contadorMejorPromedio = 0;
	contadorLibreMasBaja = 0;
	notasTotalFemeninos = 0;
	notasTotalMasculinos = 0;
	notasTotalNoBinarios = 0;
	masMaterias = 0;
	contadorMasMaterias = 0;


	do
	{
		do
		{
			nombreAlumno = prompt("Ingrese el nombre del alumno");
			validarNombreAlumno = isNaN(nombreAlumno);
		}while(validarNombreAlumno == false);

		do
		{
			tipoCursada = prompt("Ingrese el tipo de cursada: libre, presencial, remota");
		}while(tipoCursada != "libre" && tipoCursada != "presencial" && tipoCursada != "remota");

		do
		{
			cantidadMaterias = prompt("Ingrese la cantidad de materias");
			cantidadMaterias = parseInt(cantidadMaterias);
		}while(cantidadMaterias < 0 || cantidadMaterias >8);

		do
		{
			sexoAlumno = prompt("Ingrese el sexo: femenino, masculino, no binario");
		}while(sexoAlumno != "femenino" && sexoAlumno != "masculino" && sexoAlumno != "no binario");

		do
		{
			notaPromedio = prompt("Ingrese la nota promedio");
			notaPromedio = parseInt(notaPromedio);
		}while(notaPromedio < 0 || notaPromedio > 10);

		do
		{
			edad = prompt("Ingrese su edad");
			edad = parseInt(edad);
			validarEdad = isNaN(edad);
		}while(validarEdad == true);

		if(sexoAlumno != "masculino")
		{
			if(notaPromedio > mejorPromedio)
			{
				mejorPromedio = notaPromedio;
				nombreMejorPromedio = nombreAlumno;
			}
			else if(contadorMejorPromedio = 0)
			{
				mejorPromedio = notaPromedio;
				nombreMejorPromedio = nombreAlumno;
			}
			contadorMejorPromedio++;
		}
		else
		{
			document.write("No existen promedios masculinos");
		}

		if(tipoCursada == "libre")
		{
			if(edadLibreMasBaja < edad)
			{
				edadLibreMasBaja = edad;
				nombreLibreMasJoven = nombreAlumno;
			}
			else if(contadorLibreMasBaja = 0)
			{
				edadLibreMasBaja = edad;
				nombreLibreMasJoven = nombreAlumno;
			}
			contadorLibreMasBaja++;
		}
		else
		{
			document.write("No existen alumnos cursando libre");
		}

		switch(sexoAlumno)
		{
			case "masculino":
				notasTotalMasculinos = notasTotalMasculinos + notaPromedio;
			break;
			case "femenino":
				notasTotalFemeninos = notasTotalFemeninos + notaPromedio;
			break;
			case "no binario":
				notasTotalNoBinarios = notasTotalNoBinarios + notaPromedio;
			break;
		}

		if(tipoCursada != "remota")
		{
			if(masMaterias< cantidadMaterias)
			{
				masMaterias = cantidadMaterias;
				alumnoMasMaterias = nombreAlumno;
				edadMasMaterias = edad;
			}
			else if(contadorMasMaterias ==0)
			{
				masMaterias = cantidadMaterias;
				alumnoMasMaterias = nombreAlumno;
				edadMasMaterias = edad;
			}
			contadorMasMaterias++;
		}
		else
		{
			document.write("<br> No hay alumnos en las cursadas libre y presencial");
		}

		continuar = confirm("Desea continuar?");
	}while(continuar == true);

	promedioMasculinos = (notasTotalMasculinos + notasTotalFemeninos + notasTotalNoBinarios)/notasTotalMasculinos;
	promedioFemeninos = (notasTotalMasculinos + notasTotalFemeninos + notasTotalNoBinarios)/notasTotalFemeninos;
	promedioNoBinarios = (notasTotalMasculinos + notasTotalFemeninos + notasTotalNoBinarios)/ notasTotalNoBinarios;

	document.write("El mejor promedio no masculino es: " + nombreMejorPromedio);
	document.write("<br> El nombre del alumno mas joven que cursa libre es: " + nombreLibreMasJoven);
	document.write("<br>");
	document.write("<br> El promedio de nota por sexo es:");
	document.write("<br> masculino: " + promedioMasculinos);
	document.write("<br> femenino: " + promedioFemeninos);
	document.write("<br> no binario: " + promedioNoBinarios);
	document.write("<br>");
	document.write("<br> La edad del alumno que cursa mas materias de forma no remota es: "+ edadMasMaterias);
	document.write("<br> Y el nombre es: "+alumnoMasMaterias);



}
