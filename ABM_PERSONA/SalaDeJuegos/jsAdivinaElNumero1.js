/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var app = angular.module('AdivinaNumero1', []);
var num = 0;
app.controller("ControlNumero", function($scope){
$scope.Comenzar=function()
{
	$scope.numAlea = GenerarNumero();
 	$scope.contador =0;

}
$scope.verificar=function()
{ 
	console.log($scope.numAlea);
	if($scope.valor == $scope.numAlea)
	{
		$scope.resultado = "usted gano con los intentos: " + $scope.contador;
	}if($scope.valor != $scope.numAlea)
	{
		if($scope.valor > $scope.numAlea)
		{
			$scope.resta = $scope.valor - $scope.numAlea;
			$scope.resultado = "se paso: " + $scope.resta + " para llegar al numero secreto";;

		}else if($scope.valor < $scope.numAlea)
		{
			$scope.resta = $scope.numAlea - $scope.valor;
			$scope.resultado = "le faltan : " + $scope.resta + " para llegar al numero secreto";
		}
		$scope.contador = $scope.contador +1;
	}
}
function GenerarNumero()
{
	return  Math.round(Math.random()*100);

}

});