/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var app = angular.module('Agilidad1', []);
app.controller("juego", function($scope){
	
$scope.comenzar=function()
{

	setTimeout($scope.operar,4000);
	$scope.n1=GenerarNumero();
	$scope.n2=GenerarNumero();
	$scope.operador = GenerarOperador();
	
}
$scope.operar=function()
{
	if($scope.operador == "+" )
	{
		$scope.resultado = $scope.n1 + $scope.n2;
	}else if($scope.operador == "*")
	{
		$scope.resultado = $scope.n1 * $scope.n2;
	}else if($scope.operador == "/")
	{
		$scope.resultado = $scope.n1 / $scope.n2;
	}else if($scope.operador == "-")
	{
		$scope.resultado = $scope.n1 - $scope.n2;
	}
	if(RespuestaUsuario())
	{
		alert("respuesta correcta!");
	}else{
		alert("respuesta incorrecta!");
	}
	console.log(RespuestaUsuario());

}
function RespuestaUsuario()
{
	if($scope.resultado == $scope.respUsuario)
	{
		return true;
	}else 
	{
		return false;
	}
}

function GenerarNumero()
{
	return  Math.round(Math.random()*(10-1)+1);

}
function GenerarOperador()
{
var posible = "+*-/"
	return posible.charAt(Math.floor(Math.random() * posible.length))
}

function delayedAlert() {
alert("hola");
  timeoutID = window.setTimeout(RespuestaUsuario(), 2000);
}

});