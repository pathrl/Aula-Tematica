var canvas = document.getElementById("presentacion");
var context = canvas.getContext("2d");
context.fillStyle = "blue";

var map = new Image();
map.src = "./img/mapa.png";

/**
 * Init datas
 */
var temp;
var cuadrado = {
  posX: 450, 
  posY: 1,
  dir: Math.random() * Math.PI * 2,
  vel: 1,
};

var cuadrados = new Array();
var numCuadrados = 10;

setTimeout("wait()", 1000); // wait 1s and call wait

/**
 * @method wait
 */
function wait() {
  context.drawImage(map, 0, 0); // en el lienzo voy a pintar la imagen en la posición (0,0)

  for(i=0; i<numCuadrados; i++){
    var cuadrado = {
      posX: Math.round(Math.random() * 512),
      posY: Math.round(Math.random() * 512),
      dir: Math.random() * Math.PI * 2,
      vel: 1,
    };

    var color = context.getImageData(cuadrado.posX, cuadrado.posY, 1, 1); //situate en la posicion del cuadrado y recoge los datos de ese punto
    if(color.data[0] != 255) {
      cuadrado.posX = 70;
      cuadrado.posY = 137;
    }

    cuadrados.push(cuadrado);
  }
  console.log(cuadrados);
  initialize();
}

/**
 * @method initialize init method
 */
function initialize() {
  temp = setTimeout("update()", 18);
  update();
}

/**
 * @method update loop method
 */
function update() {
  temp = clearTimeout();

  context.clearRect(0, 0, 512, 512);         //Borra lo anterior
  context.drawImage(map, 0, 0, 512, 512);    // Draw Image 
  
  for (i=0; i<numCuadrados; i++) {
    cuadrados[i].dir = (Math.random() - 0.5) * 0.5;
    
    var auxX = cuadrados[i].posX + Math.cos(cuadrados[i].dir) * cuadrados[i].vel; // Miro hacia donde voy en X
    var auxY = cuadrados[i].posY + Math.sin(cuadrados[i].dir) * cuadrados[i].vel; // Miro hacia donde voy en Y
    var color = context.getImageData(auxX, auxY, 1, 1); // Miro el color en ese punto

    if (color.data[0] == 255) { // Si es igual a blanco (las calles) - continua
      cuadrados[i].posX += Math.round(Math.cos(cuadrados[i].dir) * cuadrados[i].vel);
      cuadrados[i].posY += Math.round(Math.sin(cuadrados[i].dir) * cuadrados[i].vel);
    } else {
      cuadrados[i].dir += Math.PI; // Da la vuelta
    }

    checkBordes(cuadrados[i]);

    context.fillRect(cuadrados[i].posX, cuadrados[i].posY, 5, 5);
  }

  temp = setTimeout("update()", 18)
}


/**
 * @method checkBordes Comprueba que el pez esta dentro del canvas
 * @param {Object} fish Fish Item
 */
function checkBordes(cuadrado) {
  if (cuadrado.posX > 512) { // IZQUIERDA
      cuadrado.posX = 512;
      cuadrado.direction += Math.PI;
    } else if (cuadrado.posX < 0) { //DERECHA
      cuadrado.posX = 0;
      cuadrado.direction += Math.PI;
    }

    if (cuadrado.posY > 512) { //ARRIBA
      cuadrado.posY = 512;
      cuadrado.direction += Math.PI;
    } else if (cuadrado.posY < 0) { //ABAJO
      cuadrado.posY = 0;
      cuadrado.direction += Math.PI;
    }
  }