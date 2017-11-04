/**
 * Declaracion de condiciones de inicio
 */
const canvasCar = document.getElementById('myCar');
const context = canvasCar.getContext('2d');
context.canvas.width = 720;
context.canvas.height = window.innerHeight;

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
  temp = setTimeout('update()', 16);

  carObject.img = new Image();
  carObject.height = 30;
  carObject.width = carObject.height * 2;
  carObject.rangeX = carObject.width / 2;
  carObject.rangeY = carObject.height / 2;

  carObject.img.onload = function() {
    context.drawImage(carObject.img, carObject.posX, carObject.posY, carObject.height, carObject.width);
  }
  carObject.img.src = './img/my-car.png';

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


  // handle key pressed
  document.onkeypress = function(evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    charStr = String.fromCharCode(charCode);
    console.log(charStr);
    switch (charStr) {
      case '': //Aumento velocidad
        break;
      case 'a': // Izquierda
        context.rotate(Math.PI);
        carObject.direction = Math.PI;
        break;
      case 's': // Abajo
        context.rotate(Math.PI / 2);
        carObject.direction = Math.PI / 2;
        break;
      case 'd': // Derecha
        context.rotate(0);
        carObject.direction = 0;
        break;
      case 'w': // Arriba
        context.rotate(Math.PI * 2);
        carObject.direction = Math.PI * 2;
        break;
      default: break;
    }

    carObject.posX += (Math.cos(carObject.direction)) * carObject.velocity;
    carObject.posY += (Math.cos(carObject.direction)) * carObject.velocity;
  };

  clearTimeout(temp);
  temp = setTimeout('update()', 16);
}


