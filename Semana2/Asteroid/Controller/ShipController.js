/**
 * Declaracion de condiciones de inicio
 */
const canvasShip = document.getElementById('ship');
const ctxShip = canvasShip.getContext('2d');
ctxShip.canvas.width = 720;
ctxShip.canvas.height = 720;

let temp;

initialize();

/**
 * @method init  initialize function
 */
function initialize() {
  let shipBot = new Ship();
  let image = 
  shipBot.image.onload = function() {
    ctxShip.drawImage(shipBot.image, shipBot.posX, shipBot.poxY, 80, 80);
  }
  shipBot.image.src = './img/ship.png';

  temp = setTimeout('update()', 18);
  update();
}


function update() {

  clearTimeout(temp);
  temp = setTimeout('update()', 16);
}

$(document).keydown(function(e) {
  let angleInDegrees;
  switch(e.which) {
      case 37: // left
      console.log('l');
      // $().click(function(){
        ship.angle-=30;
        drawRotated();
    //  });
      break;

      case 39: // right
      console.log('r');
      ship.angle-=30;
      drawRotated();
      break;

      default: return; // exit this handler for other keys
  }
  e.preventDefault();
});

function drawRotated(){console.log(ship);
  ctxShip.clearRect(0,0,canvasShip.width,canvasShip.height);
  ctxShip.save();
  ctxShip.translate(canvasShip.width/2,canvasShip.height/2);
  ctxShip.rotate(ship.angle*Math.PI/180);
  ctxShip.drawImage(ship.image, ship.posX, ship.poxY, 80, 80);
  ctxShip.restore();
}