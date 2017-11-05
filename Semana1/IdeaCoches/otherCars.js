/**
 * Declaracion de condiciones de inicio
 */
const canvasCar = document.getElementById('myCar');
const context = canvasCar.getContext('2d');
context.canvas.width = 720;
context.canvas.height = window.innerHeight;

let temp;
let otherCars = new Array();

initialize();

/**
 * @method initialize init methdo
 */

function initialize() {
  temp = setTimeout('update()', 16);

  for(i = 0; i < 3; i++) {
    var carObject = {
      posX: 60,
      posY: 0,
      velocity: 5,
      direction: Math.PI * 2, // 270 grados HACIA ABAJO
    };

    carObject.img = new Image();
    carObject.height = 30;
    carObject.width = carObject.height * 2;
    carObject.rangeX = carObject.width / 2;
    carObject.rangeY = carObject.height / 2;
  }

  carObject.img.onload = function() {
    context.drawImage(carObject.img, carObject.posX, carObject.posY, carObject.height, carObject.width);
  }
  carObject.img.src = './img/other-car.png';

  update();
}

/**
 * @method update loop method
 */

function update() {

  context.clearRect(0, 0, context.canvas.width, context.canvas.height);

  context.drawImage(carObject.img, carObject.posX, carObject.posY, carObject.height, carObject.width);
  carObject.posX += Math.cos(carObject.direction) * carObject.velocity;
  carObject.posY += Math.sin(carObject.direction) * carObject.velocity;


  clearTimeout(temp);
  temp = setTimeout('update()', 16);
}


