/**
 * Declaracion de condiciones de inicio
 */
const canvasShip = document.getElementById('ship');
const ctxShip = canvasShip.getContext('2d');
ctxShip.canvas.width = 720;
ctxShip.canvas.height = 720;

let shipBot;
let temp;

initialize();

/**
 * @method init  initialize function
 */
function initialize() {
  shipBot = new Ship();
  shipBot.posX = 300;
  shipBot.posY = 300;
  loadImage(ctxShip, shipBot.image, shipBot.posX, shipBot.posY, shipBot.width, shipBot.height, 'img/ship.png');

  temp = setTimeout('update()', 18);
  update();
}


function update() {

  clearTimeout(temp);
  temp = setTimeout('update()', 18);
}

$(document).keydown(function(e) {
  let angleInDegrees;
  switch(e.which) {
      case 37: // left
        shipBot.moveLeft();
        drawRotated();
        break;

      case 39: // right
        shipBot.moveRight();
        drawRotated();
        break;

      default: return; // exit this handler for other keys
  }
  e.preventDefault();
});

function drawRotated(){
  ctxShip.clearRect(0, 0, ctxShip.canvas.width, ctxShip.canvas.height);
  ctxShip.translate(shipBot.posX, shipBot.posY);
  ctxShip.rotate(shipBot.angle);
  ctxShip.drawImage(shipBot.image, -shipBot.width / 2, -shipBot.height / 2, shipBot.width, shipBot.height);
  ctxShip.rotate(-shipBot.angle);
  ctxShip.translate(-shipBot.posX, -shipBot.posY);
}