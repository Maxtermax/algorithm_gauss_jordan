var Grafics = function(data) { }


var grid = function (ctx,width,height,space,color) {
	for (var i = 1; i < width/space; i++) {	
		ctx.beginPath()
		ctx.strokeStyle = color
		if(i == (width/space)/2 ) ctx.strokeStyle = 'black'
		ctx.moveTo(0,i*space)
		ctx.lineTo(width,i*space)
		ctx.stroke()
		ctx.closePath()
	}//rows 

	for (var j = 1; j < height/space; j++) {	
		ctx.beginPath()
		ctx.strokeStyle = color
		if(j == (height/space)/2 ) ctx.strokeStyle = 'black'
		ctx.moveTo(j*space,0)
		ctx.lineTo(j*space,height)
		ctx.stroke()
		ctx.closePath()
	}//colums  
}//end grid

var subs = function(array) {
	var tmp = []
	for (var i = 0; i < array.length; i++) {
		var len = array[i].length
		tmp.push( array[i][len-1] )
	}
	if(tmp.length%2 != 0) tmp.push([0])
	var res = []
	for (var i = 0; i < tmp.length; i++) if(i%2 == 0) res.push( [tmp[i],tmp[i+1] ] );
	return res 
}//end subs 

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function point(x,y,width,height,ctx) {
	ctx.beginPath()
	ctx.fillStyle = "#"+this.getRandomInt(3,9)+this.getRandomInt(3,9)+this.getRandomInt(3,9)
	ctx.font="10px Arial";
	ctx.fillText('('+ (-x.toFixed(2)) +' , '+ (-y.toFixed(2)) +')',(width/2)-(x*space )+10,(height/2)+( y*space));
	ctx.arc( (width/2)-(x*space ) , (height/2)+( y*space) , 5,0,Math.PI*2)
	ctx.fill()
	ctx.closePath()
}
	



Grafics.prototype.grid = grid
Grafics.prototype.subs = subs
Grafics.prototype.getRandomInt = getRandomInt
Grafics.prototype.point = point



