
/**
 * Declaracion de condiciones de inicio
 */
const canvasBackground = document.getElementById('carGame');
let contextBackground = canvasBackground.getContext('2d');

const canvasCar = document.getElementById('myCar');
let contextCar = canvasCar.getContext('2d');

contextCar.canvas.width = 720;
contextCar.canvas.height = window.innerHeight;

let temp;
let carObject = {
  posX: 60,
  posY: 0,
  velocity: 5,
  direction: Math.PI / 2, // 90 grados HACIA ABAJO
};

initialize();

/**
 * @method initialize init methdo
 */

function initialize() {
  carObject.img = new Image();
  carObject.height = 30;
  carObject.width = carObject.height * 2;
  carObject.rangeX = carObject.width / 2;
  carObject.rangeY = carObject.height / 2;

  carObject.img.onload = function() {
    contextCar.drawImage(carObject.img, carObject.posX, carObject.posY, carObject.height, carObject.width);
  }
  carObject.img.src = './img/my-car.png';

  temp = setTimeout('update()', 16);
  update();
}

/**
 * @method update loop method
 */

function update() {

  contextCar.clearRect(0, 0, contextCar.canvas.width, contextCar.canvas.height);

  contextCar.drawImage(carObject.img, carObject.posX, carObject.posY, carObject.height, carObject.width);  
  
  //Recogo los colores que existen en el punto al que se dirige el objecto
  let auxX = carObject.posX + Math.cos(carObject.direction) * carObject.velocity;
  let auxY = carObject.posY + Math.sin(carObject.direction) * carObject.velocity;
  let color = contextBackground.getImageData(auxX, auxY, 1, 1);

  //Si es entre gris oscuro y blanco -- continuo si no compruebo los dos laterales.
  if (color.data[0] == 255 || (color.data[0] >= 54 && color.data[0] <= 179)) {
    carObject.posX += Math.cos(carObject.direction) * carObject.velocity;
    carObject.posY += Math.sin(carObject.direction) * carObject.velocity;
  } else {
    carObject.direction -= Math.PI / 4;
    carObject.posX += Math.cos(carObject.direction) * carObject.velocity;
    carObject.posY += Math.sin(carObject.direction) * carObject.velocity;
    // let dir = carObject.direction + (Math.PI / 4);
    // let auxX = carObject.posX + Math.cos(dir) * carObject.velocity;
    // let auxY = carObject.posY + Math.sin(dir) * carObject.velocity;
    // let color = contextBackground.getImageData(auxX, auxY, 1, 1);

    // if (color.data[0] == 255 || (color.data[0] >= 54 && color.data[0] <= 179)) {
    //   carObject.posX += Math.cos(dir) * carObject.velocity;
    //   carObject.posY += Math.sin(dir) * carObject.velocity;
    // } else {
    //   let dir = carObject.direction - (Math.PI / 4);
    //   let auxX = carObject.posX + Math.cos(dir) * carObject.velocity;
    //   let auxY = carObject.posY + Math.sin(dir) * carObject.velocity;
    //   let color = contextBackground.getImageData(auxX, auxY, 1, 1);

    //   if (color.data[0] == 255 || (color.data[0] >= 54 && color.data[0] <= 179)) {
    //     carObject.posX += Math.cos(dir) * carObject.velocity;
    //     carObject.posY += Math.sin(dir) * carObject.velocity;
    //   }
    // }
  }

  carObject = checkBordes(carObject);

  clearTimeout(temp);
  temp = setTimeout('update()', 16);
}


function checkBordes(object) {
  if (object.posX > 512) { // IZQUIERDA
      object.posX = 512;
      object.direction += Math.PI;
    } else if (object.posX < 0) { //DERECHA
      object.posX = 0;
      object.direction += Math.PI;
    }

    if (object.posY > 512) { //ARRIBA
      object.posY = 512;
      object.direction += Math.PI;
    } else if (object.posY < 0) { //ABAJO
      object.posY = 0;
      object.direction += Math.PI;
    }

    return object;
  }
