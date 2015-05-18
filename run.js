var watch = require('node-watch')
var exec = require('child_process').exec
//var files = process.argv.slice(2,process.argv.length) //file list
var files = [
	'index.html',
	'instrucciones.html',
	'package.json',
	'graficas.html',
	'styles/style.css',
	'styles/grafics.css',
	'styles/instrucciones.css',
	'scripts/array.js',
	'scripts/grafic.js',
	'scripts/graficar.js',
	'scripts/windows.js',
	'scripts/main.js',
	'scripts/instruccion.js'

]
console.log('Watching *.*',new Date());

watch(files,function(filename) {
	exec('winzip zip ./ index.zip',function(error,stdout,stderr) {
		if (error) return console.log('Error comprimiendo el paquete',error)
		exec('taskkill /im nw.exe',function(err,out,terr) {
			if(err) return exec('nw index.zip',function() {
				console.log(filename,'changed at',new Date(),'\n')
			}) 
			exec('nw index.zip',function() {
				console.log(filename,'changed at',new Date(),'\n')
			})
		})
	})
})


