/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/
var app = angular.module('AdivinaNumero2', []);
var num = 0;
app.controller("ControlNumero", function($scope){
$scope.Comenzar=function()
{
	$scope.numAlea =1;
 	$scope.contador =0;

}
$scope.verificar=function()
{ 
	console.log($scope.numAlea);
	if($scope.valor == $scope.numAlea)
	{
		if($scope.contador == 0)
		{
			$scope.resultado = "usted es un Psíquico";
	
		}else if($scope.contador == 1)
		{
			$scope.resultado = "excelente percepción";

		}else if($scope.contador == 2)
		{
			$scope.resultado = "est0 es suerte";

		}else if($scope.contador == 3)
		{
			$scope.resultado = "excelente tecnica";


		}else if($scope.contador == 4)
		{
			$scope.resultado = "usted esta en la media";

		}else if($scope.contador == 5)
		{
			$scope.resultado = "falta practica";

		}
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