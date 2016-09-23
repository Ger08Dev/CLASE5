var app = angular.module('ppt', []);
app.controller("juego", function($scope){
	$scope.contG=0;
	$scope.contP=0;
	$scope.contE=0;
$scope.comenzar=function()
{
	if(Number($scope.contG) ==0 || Number($scope.contP) ==0 || Number($scope.contE) == 0)
	{
	$scope.contG=0;
	$scope.contP=0;
	$scope.contE=0;
	}
	$scope.numAlea =GenerarNumero();
	console.log($scope.numAlea);

}
$scope.piedra=function()
{ 
	if($scope.numAlea==1)
	{

		$scope.resultado = "empato";
		Contadores();
	}else if($scope.numAlea == 2)
	{
		$scope.resultado="perdio";
		Contadores();
	}else if($scope.numAlea == 3)
	{
		$scope.resultado="ganó";
		Contadores();
	}
	console.log($scope.resultado);
}
$scope.papel=function()
{ 	
	if($scope.numAlea==2)
	{
		$scope.resultado = "empato";
		Contadores();
	}else if($scope.numAlea == 1)
	{
		$scope.resultado="gano";
		Contadores();
	}else if($scope.numAlea == 3)
	{
		$scope.resultado="perdio";
		Contadores();
	}
		console.log($scope.resultado);

}

$scope.tijera=function()
{ 
		if($scope.numAlea==3)
	{
		$scope.resultado = "empato";
		Contadores();
	}else if($scope.numAlea == 2)
	{
		$scope.resultado="gano";
		Contadores();
	}else if($scope.numAlea == 1)
	{
		$scope.resultado="perdio";
		Contadores();
	}
		console.log($scope.resultado);

}
function GenerarNumero()
{
	return  Math.round(Math.random()*(3-1)+1);

}
function Contadores()
{
	if($scope.resultado == "empato")
		{
			$scope.contE = 1 + $scope.contE;
			$scope.empatadas ="Cantidad de empates: "+ $scope.contE; 
			console.log($scope.empatadas);
		}else if($scope.resultado == "gano")
		{
			$scope.contG = 1 + $scope.contG;
			$scope.ganadas ="Cantidad de ganadas: "+ $scope.contG; 
			console.log($scope.ganadas);

		}else	if($scope.resultado == "perdio")
		{
			$scope.contP = 1 + $scope.contP;
			$scope.perdidas ="Cantidad de perdidas: "+ $scope.contP; 
				console.log($scope.perdidas);

		}
}
});