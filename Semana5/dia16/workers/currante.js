self.onmessage(function(){
  console.log('soy el currante y he recibido un mensaje');
  self.postMessage('te devuelvo un mensaje desde el currante');
});