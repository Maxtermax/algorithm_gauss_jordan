var gui = require('nw.gui')
var nwin = gui.Window.get()

var start = function() {
  nwin.show()
  nwin.maximize()
}//end start

var open_instructions = function() {
	window.open('instrucciones.html',{
  	"position": "center",
  	"focus": true,
  	"toolbar": false,
  	"frame": true,
    "height":400,
    "width": 400, 
    "maximize":false
 	})
}//end open instrucciones 

var open_grafics = function(data) {
  global.data = data
  global.gui = gui 
  window.open('graficas.html',{
    "focus": true,
    "toolbar": true,
    "frame": true,
  })

}//end open instrucciones 

    	

window.onload = start //init windows in maximaze
var mb = new gui.Menu({type:"menubar"})//menu bar 
var file = new gui.Menu()


file.append(new gui.MenuItem({
	label: 'Instrucciones',
	click: open_instructions 
}))

file.append(new gui.MenuItem({
    label: 'Salir',
    click: function() {
      nwin.close();
    }
}))
 
mb.append(new gui.MenuItem({ label: 'Archivo', submenu: file}));

gui.Window.get().menu = mb;
































