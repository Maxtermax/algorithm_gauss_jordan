var $ = global.data  
,	gui =	window.require('nw.gui')
,	fs = require('fs')
,	Frame  = require('canvas-to-buffer')
,	win = gui.Window.get()
,	grafics = new Grafics()
,	canvas = document.getElementById('lienzo')
,	ctx = canvas.getContext('2d')
,	width = canvas.width
,	height = canvas.height
, space = 20

win.width = 431 
win.height = 460 


var graficar = function(ctx,width,height) {
	var cor = grafics.subs($.variables)
	grafics.grid(ctx,width,height,space,'#eee')
	for(var i = 0;i< cor.length; i++) {
		var x = cor[i][0]
		var y = cor[i][1]
		x = -x;
		y = -y;
		grafics.point(x,y,width,height,ctx)
	}//End draw points  
}//End graficar 

var width = win.width
var height = win.height

/*
win.addListener('maximize',function() {
	win.width = width 
	win.height = height
})

win.addListener('resize',function() {
	win.width = width 
	win.height = height
})
*/

var board = function ($scope) {
	var canvas_board = angular.element(canvas)[0]
	graficar(ctx,canvas.width,canvas.height)
	$scope.dimencion = '400'

	$scope.update = function(dimencion) {
		dimencion = Number(dimencion)
		canvas_board.width = dimencion
		canvas_board.height =	dimencion
		graficar(ctx,canvas_board.width,canvas_board.height)
		if(dimencion == 600) {
			width = 631
			height = 660
			win.width = width 
			win.height = height
		} else	if(dimencion == 400) {
			width = 431 
			height = 460
			win.width = width 
			win.height = height
		}//end resize 	
	}//end update
	 
	var select = document.getElementsByClassName('save')[0]
	select.onchange = function(e) {
		var path = select.value
		var data = canvas.toDataURL("image/png").toString()
		fs.writeFile(path,data.replace(/^data:image\/png;base64,/, ""),'base64',function(err,res) { 
		 console.log(err,'OK')   
		})
	}//end change 


}//end board 


angular
	.module('Grafics',[])	
	.controller('board',board)

	


































