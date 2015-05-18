var Scroll = function ($scope,$window) {
	$scope.scrollTo = function(data) {
		window.scrollTo(0,data.y);
	}//end scrollTo

}//end Scroll



angular
	.module('Instruccion',[])
	.controller('Scroll',Scroll)





























