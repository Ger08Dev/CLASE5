/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var app = angular.module('ppt', []);
app.controller("juego", function($scope){
$scope.comenzar=function()
{
	$scope.numAlea =GenerarNumero();
	console.log($scope.numAlea);

}
$scope.piedra=function()
{ 
	if($scope.numAlea==1)
	{
		$scope.resultado = "empato";
	}else if($scope.numAlea == 2)
	{
		$scope.resultado="perdio";
	}else if($scope.numAlea == 3)
	{
		$scope.resultado="ganó";
	}
	console.log($scope.resultado);
}
$scope.papel=function()
{ 	
	if($scope.numAlea==2)
	{
		$scope.resultado = "empato";
	}else if($scope.numAlea == 1)
	{
		$scope.resultado="gano";
	}else if($scope.numAlea == 3)
	{
		$scope.resultado="perdio";
	}
		console.log($scope.resultado);

}

$scope.tijera=function()
{ 
		if($scope.numAlea==3)
	{
		$scope.resultado = "empato";
	}else if($scope.numAlea == 2)
	{
		$scope.resultado="ganó";
	}else if($scope.numAlea == 1)
	{
		$scope.resultado="perdio";
	}
		console.log($scope.resultado);

}
function GenerarNumero()
{
	return  Math.round(Math.random()*3);

}
});