self.onmessage = function(msg){
  //recibo el mensaje
  console.log('soy el currante y he recibido el mensaje: ' + msg.data);
  //contesto enviando un mensaje
  self.postMessage('Adios');
};