/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var app = angular.module('reflejo1', []);
app.controller("juego", function($scope){
	
$scope.comenzar=function()
{

	$scope.color=generadorPalabras();
	
}
$scope.Responder=function(respuesta)
{
	if(respuesta == $scope.color)
	{
		alert("correcto");
	}else 
	{
		alert("incorrecto");
	}

}
function generadorPalabras()
{
var aLetras = new Array('azul', 'verde', 'rojo','amarillo','celeste','marron');
return aLetras[Math.floor(Math.random()*aLetras.length)];
}
});



var milisec=0
var seconds=0
document.d.d2.value='0'
function display(){
if (milisec>=9){
milisec=0
seconds+=1
}
else
milisec+=1
document.d.d2.value=seconds+"."+milisec
setTimeout("display()",100)
}
display()
//-->