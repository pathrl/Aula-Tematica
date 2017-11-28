var temporizador;
var numero = 2;

self.onmessage = function(e){
  console.log("soy el currante y he recibido un mensaje: "+e.data)
  //postMessage("Adios")
  temporizador = setTimeout("bucle()",30)
}
function bucle(){
  numero *= 2;
  postMessage(numero)
  clearTimeout(temporizador)
  temporizador = setTimeout("bucle()",30)
}

var temporizador;
var numero = 2;

self.onmessage = function(e){
    console.log("soy el currante y he recibido un mensaje: "+e.data)
    //postMessage("Adios")
    temporizador = setTimeout("bucle()",30)
}
function bucle(){
    numero *= 2;
    postMessage(numero)
    clearTimeout(temporizador)
    temporizador = setTimeout("bucle()",30)
}