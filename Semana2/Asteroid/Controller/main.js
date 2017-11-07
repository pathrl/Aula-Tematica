/**
 * Declaracion de condiciones de inicio
 */
const myCanvas = document.getElementById('asteroid');
const ctx = myCanvas.getContext('2d');
ctx.canvas.width = 720;
ctx.canvas.height = 720;
ctx.font = "13px arial";


initialize();

/**
 * @method init  initialize function
 */
function initialize() {
  console.log('main');
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
