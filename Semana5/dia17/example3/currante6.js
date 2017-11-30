var temporizador;
var numero = 2;

self.onmessage = function(e) {
  var datos = e.data;
  var partido = datos.split(',');
  var serializado;
  for(var i = 0; i < partido.length; i++) {
    partido[i] = 255 - partido[i];
    serializado += partido[i] + ',';
  }
  postMessage(serializado);
  //postMessage("Adios")
}