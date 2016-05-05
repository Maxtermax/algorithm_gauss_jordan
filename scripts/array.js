var  Matriz = function() {
	var self = this 
}

var generate = function(i,j) {
	var self = this 
	var res = []
	for (var rows = 0; rows < i; rows++) {
		res.push([])	
		for (var colums = 0; colums < j; colums++) {
			res[rows].push(0)
		}//end colums
	}//end rows
	return res 
}//end generate

//GAUSS COMIENZA DESDE AQUI 
var suma = function(a,b) {
	var res = []
	for ( i in a) {
		res.push(a[i]+b[i])
	}
	return res 
}//end suma 

var multiplicar = function(array,num) {
	var res = []
	for ( i in array) {
		res.push(array[i]*num)
	}
	return res 
}//end multiplicar

var divide = function(array,num) {
	for (var i =0; i < array.length;i++) {
		if(array[i] === 0) continue
		array[i] = array[i]/num
	}
	return array 
}// divide 


var show = function(array) {
	for (i in array) {
		console.log(array[i])
	}
}

var intercambiar = function(array,index,cb) {
	/*
		pone un elemento en la posicion del index que llega por parametro 
		y lo intercambia por cualquier otro numero diferente a cero si se cumple ese 
		caso el ciclo se rompe y si el unico elemento que es distinto de cero en una fila 
		a lo que es igual la ecuacion es decir algo asi:
		0 0 0 = 2
		entonces lo pasa al otro lado con el signo contrario 
		-2 0 0 = 0
		En caso de que todos los elementos de esa fila sean ceros entonces retorna un error 
		por que hay una fila entera nula 
	*/ 
	for ( var i = 0;i<array.length;i++) {
		if(array[i] != 0) {
			var tmp = array[index]
			array[index] = array[i] 
			if(i === array.length-1) array[index] = -array[index]
			array[i] = tmp 
			break
		}
	}
	if(array[index] != 0) return cb(false,array)
	return cb(true,array)  }//end intercambiar

var resolveUno = function(row,index,cb) {
	/*
	resive la fila y el indice el elemento que se quiere convertir en uno 
	funciona mirando la fila que se le paso por parametro y busca un numero 
	que en esa misma fila que pueda poner en la posicion necesaria es decir el index 
	que llega por parametro y los intercambia 
	*/
	var pivot = row[index]
	if( pivot != 1 ) intercambiar(row,index,function(err,res) {
		//el error en caso de que todos los numeros de esa fila sean ceros 
		if(err) return cb(true)
		row = res 
		row = divide(row,res[index])
		/*
		divide la fila por el elemento que de la posicion 
		requerida es decir el index que llego por parametro 
		*/
	})
	return row
}//end resolve uno

var resolveCero = function(array,index) {
	var pivot = array[index]
	for (var i = 0; i < array.length; i++) {
		if(i === index) continue
		var current = array[i][index]//item actual
		var mult =  multiplicar(pivot,-current)//fila pivote multiplicada	
		array[i] = suma(array[i],mult)
	} 
}//end resolve cero 


var gauss = function (g,cb) {
	var self = this 
	for (var i = 0; i < g.length; i++) {
		resolveUno(g[i],i,function(err,res) {
			if(err) return cb(true)				
			g[i] = res
		}) 
		/*
		resolveUno
			resuelve el uno de la diagonal principa correspondiente 
			por eso resive como paremtreo g[i] = fila actual y i = indice de la fila o el contador del ciclo
			retorna la fila con el uno resuelto 
		*/
		for (var e = i; e < g.length; e++) {
			resolveCero(g,i)
			/*
			resolveCero
				toma el arreglo entero despues de que tenga la fila de la diagonal correspondiente en 
				uno y convierte los que estan por debajo o encima de esa fila en ceros 
				no retorna nada por que hace referencia directamente al arreglo principal es 
				decir es como si las lineas que estan dentro de la funcion resolveCero estuvieran 
				escritas dentro de este ciclo 
			*/
		}//end solve ceros 
	//	if(String(g[e]).split(".").length > 1 ) g[e] = float2rat(g[e])
	}//end solve uno 
	return g
}//end gauss 

Matriz.prototype.gauss = gauss
Matriz.prototype.generate = generate
