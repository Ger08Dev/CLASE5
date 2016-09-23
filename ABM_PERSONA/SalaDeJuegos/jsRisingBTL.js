/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
var app = angular.module('risign', []);
app.controller("carga", function($scope){
	
$scope.ComenzarIngreso=function()
{
var sexo
var EstadoCivil;
var Sueldo;
var legajo;
var Nacionalidad;
/*
sexo=prompt('Ingrese su Edad:','');

while(  sexo <18  || sexo >90 )
{

	alert("ingrese una edad entre 18 y 90 años");
	sexo=prompt('Ingrese su Edad:','');
}

EstadoCivil = prompt('Ingrese estado civil 1= soltero, 2=casado, 3= divorciados 4= viudos','');

while(EstadoCivil < 0 ||  EstadoCivil > 4)
{
	alert("ingrese un estado civil valido del 1 al 4");
EstadoCivil= prompt('Ingrese estado civil 1= soltero, 2=casado, 3= divorciados 4= viudos','');

}
if(EstadoCivil == 1)
{
	EstadoCivil=="soltero";
}else if(EstadoCivil == 2)
{
	EstadoCivil=="Casado";
}else if(EstadoCivil == 3)
{
	EstadoCivil == "divorciados";
}else if (EstadoCivil == 4)
{
	EstadoCivil == "viudos";
}

sueldo = prompt('Ingrese sueldo bruto(no menor a 8000)','');

while(sueldo<8000)
{
	alert("Ingrese un sueldo bruto no menor a 8000");
}
*/
/*$scope.Sexo=prompt('Ingrese su sexo:','');
$scope.EstadoCivil =prompt('Ingrese su EstadoCivil:','');
$scope.Sueldo= prompt('Ingrese su sueldo:','');
$scope.Legajo=prompt('Ingrese su Legajo:','');
$scope.Nacionalidad= prompt('Ingrese su Nacionalidad:','');

VALlegajo = false;

while(VALlegajo== false)
	{

		legajo = prompt("ingrese el numero de legajo",'');
		numero = legajo.charAt(0);
 		if (!/^([0-9])*$/.test(legajo) || (legajo.length != 4 ) || (numero ==0))
 		{
  	    alert("El valor " + legajo + " tiene que ser un numero de 4 digitos y sin empezar con 0");
  	    }
	else{

	VALlegajo = true;	
	}
	
	}

	*/
		Nacionalidad= prompt("INGRESE NACIONALIDAD  VALIDAD ",'');

		Nacionalidad = Nacionalidad.toUpperCase();

		console.log(Nacionalidad);

	while(Nacionalidad !="A" || Nacionalidad !="B")
	{
		alert("POR FAVOR INGRESE UNA NACIONALIDAD VALIDAD A,E O N");
		Nacionalidad= prompt("INGRESE NACIONALIDAD  VALIDAD ",'');
		Nacionalidad = Nacionalidad.toUpperCase();
		

	}

	if(Nacionalidad == "A" )
		{
			Nacionalidad = "argentinos";
		}else if(Nacionalidad== "E")
		{
			Nacionalidad = "extranjero";
		}else if(Nacionalidad == "N")
		{
			Nacionalidad ="nacionalizado";
		}
}
});



