
var app = angular.module('ABMangularPHP', []);




app.controller('controlAlta', function($scope, $http) {
  $scope.DatoTest="**alta**";

//inicio las variables
 
  $scope.enviar = function(){
          $http.post("datos.html", $scope.persona)
            .success(function(res){
              console.log(res);
              //por supuesto podrás volcar la respuesta al modelo con algo como vm.res = res;
            });  
        }

  
    /*
    $http.post('PHP/nexo.php', { datos: {accion :"insertar",persona:$scope.persona}})
    .then(function(respuesta) {       
         //aca se ejetuca si retorno sin errores        
         console.log(respuesta.data);

    },function errorCallback(response) {        
        //aca se ejecuta cuando hay errores
        console.log( response);           
    });

  */

  
});


    

