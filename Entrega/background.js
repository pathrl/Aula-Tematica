/**
 * Declaracion de condiciones de inicio
 */
var myCanvas = document.getElementById('carGame');
var ctx = myCanvas.getContext('2d');
ctx.canvas.width = 720;
ctx.canvas.height = window.innerHeight;

var  background = new Image();
var  background2 = new Image();

initialize();

/**
 * @method init  initialize function
 */
function initialize() {
  background.onload = function() {
    ctx.drawImage(background, 0, 0, ctx.canvas.width, ctx.canvas.height / 2);
  }
  background.src = './img/background.jpg';

  background2.onload = function() {
    ctx.drawImage(background2, 0, ctx.canvas.height / 2, ctx.canvas.width, ctx.canvas.height / 2);
  }
  background2.src = './img/background2.png';
}
