var temporizador;
var xInit;
var yInit;
var redInit;
var blueInit;
var greenInit;
var sizeInit;
var anguloInit;
var velInit;

self.onmessage = function(msg){
  //console.log("soy el currante y he recibido un mensaje: "+msg.data);
  var datos = msg.data;
  var partido = datos.split(',');
  xInit = parseFloat(partido[0]);
  yInit = parseFloat(partido[1]);
  redInit = parseFloat(partido[2]);
  blueInit = parseFloat(partido[2]);
  greenInit = parseFloat(partido[2]);
  sizeInit = parseFloat(partido[5]);
  anguloInit = parseFloat(partido[6]);
  velInit = parseFloat(partido[7]);

  temporizador = setTimeout('bucle()',30);
}
function update(){
  anguloInit += Math.random() * 1;
  velInit += Math.round((Math.random() - 0.5) * 4);
  xInit += Math.cos(anguloInit) * velInit;
  yInit += Math.sin(anguloInit) * velInit;
  redInit += Math.round((Math.random() - 0.5) * 4);
  blueInit += Math.round((Math.random() - 0.5) * 4);
  greenInit += Math.round((Math.random() - 0.5) * 4);
  sizeInit += Math.round((Math.random() - 0.5) * 4);

  if(velInit <= 0) velInit = 1;
  if(velInit > sizeInit) velInit = sizeInit;

  if(sizeInit <= 0) sizeInit = 1;
  if(sizeInit > 10) sizeInit = 10;

  if(xInit < 0){anguloInit += Math.PI;xInit = 1;}
  if(xInit > 1920){anguloInit += Math.PI;xInit = 1919;}
  if(yInit < 0){anguloInit += Math.PI;yInit = 1;}
  if(yInit > 1080){anguloInit += Math.PI;yInit = 1079;}
  
  postMessage(Math.round(xInit) + ',' + Math.round(yInit) + ',' + redInit + ',' + blueInit + ',' + greenInit + ',' + sizeInit);

  clearTimeout(temporizador);
  temporizador = setTimeout("bucle()",30);
}
