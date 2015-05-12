var matriz = new Matriz()
/*
var ngui = require('nw.gui')
var nwin = ngui.Window.get()

window.onload = function() {
  nwin.show()
  nwin.maximize()
}
*/

var Input = function($scope) {
	var longitud = $scope.dimencion = 2 
	$scope.matriz = matriz.generate(longitud,1+longitud)

	$scope.createMatriz = function(i,j) {
		j++
		$scope.matriz = matriz.generate(i,j)
	}//end crearMatriz

	$scope.actualizar = function(i,j,item) {
		var test = Number(item) 
		//item = new item
		if(test || test == 0) {
		 $scope.matriz[i][j] = test
		 this.algo = 'normal'	
		}else {
			this.algo = 'error'	
			sweetAlert("Oops...","Solo se permiten numeros enteros o decimales, asegurate de completar el campo correctamente.", "error")
		}			
	}//end update matriz when the user change values

	$scope.Gauss = function () {
		matriz.gauss($scope.matriz,function(err,res) {
			if(err) return sweetAlert("Oops...","El sistema de ecuaciones no se puede resolver, asegurate de no poner filas nulas.", "error");			
			$scope.matriz = res 
		})
	}//end Gauss

	$scope.showPos = function(i,j) {
		$scope.showX = i 
		$scope.showY = j
	}//end showPos




}//end Input 






angular
	.module('Gauss',[])
	.controller('input',Input)




























