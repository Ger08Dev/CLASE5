/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var app = angular.module('Agilidad1', []);
app.controller("juego", function($scope){
	
$scope.comenzar=function()
{
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

});