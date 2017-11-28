var temporizador;
var xinicial;
var yinicial;
var rinicial;
var ginicial;
var binicial;
var tamanioinicial;
var anguloinicial;
var velocidadinicial;
var datos;
var partido;
var fps;
self.onmessage = function(e){
    //console.log("soy el currante y he recibido un mensaje: "+e.data)
    datos = e.data;
    partido = datos.split(",");
    xinicial = parseFloat(partido[0]);
    yinicial = parseFloat(partido[1]);
    rinicial = parseFloat(partido[2]);
    ginicial = parseFloat(partido[3]);
    binicial = parseFloat(partido[4]);
    tamanioinicial = parseFloat(partido[5]);
    anguloinicial = parseFloat(partido[6]);
    velocidadinicial = parseFloat(partido[7]);
    fps = parseInt(partido[8]);
    //postMessage("Adios")
    temporizador = setTimeout("bucle()",fps)
    //console.log("hasta aqui llego")
}
function bucle(){
    
    //console.log("estoy en el bucle")
    //xinicial += (Math.random()-0.5)*4
    //yinicial += (Math.random()-0.5)*4
    anguloinicial += (Math.random()-0.5)*1 
    velocidadinicial += Math.round((Math.random()-0.5)*4)
    xinicial += Math.cos(anguloinicial)*velocidadinicial
    yinicial += Math.sin(anguloinicial)*velocidadinicial
    
    rinicial += Math.round((Math.random()-0.5)*4)
    ginicial += Math.round((Math.random()-0.5)*4)
    binicial += Math.round((Math.random()-0.5)*4)
    tamanioinicial += Math.round((Math.random()-0.5)*4)
    if(velocidadinicial > tamanioinicial){velocidadinicial = tamanioinicial}
    if(velocidadinicial < 0){velocidadinicial = 1;}
    if(tamanioinicial < 1){tamanioinicial = 1}
    if(tamanioinicial > 2){tamanioinicial = 2}
    if(xinicial < 0){anguloinicial += Math.PI;xinicial = 1}
    if(xinicial > 1920){anguloinicial += Math.PI;xinicial = 1919}
    if(yinicial < 0){anguloinicial += Math.PI;yinicial = 1}
    if(yinicial > 1080){anguloinicial += Math.PI;yinicial = 1079}
    postMessage(Math.round(xinicial)+","+Math.round(yinicial)+","+rinicial+","+ginicial+","+binicial+","+tamanioinicial)
    clearTimeout(temporizador)
    temporizador = setTimeout("bucle()",33)
}
