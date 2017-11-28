let warmAux;

self.onmessage = function(msg){
  wormAux = msg.data;
  // temp
  temporizador = setTimeout('update()',30);
}
function update() {
  wormAux.moveWorm();
  wormAux.checkColision();
  // temp
  clearTimeout(temporizador);
  temporizador = setTimeout('update()',30);
}
