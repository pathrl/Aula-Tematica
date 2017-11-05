/**
 * Declaracion de condiciones de inicio
 */
var myCanvas = document.getElementById('background');
var context = myCanvas.getContext('2d');
var undersea = new Image();
var temp;

initialize();

/**
 * @method init  initialize function
 */
function initialize() {
  temp = setTimeout('update()', 16);
  undersea.src = './img/undersea.jpeg';
  update();
}

/**
 * @method update loop function
 */
function update() {
  context.drawImage(undersea, 0, 0, 512, 512);

  clearTimeout(temp);
  temp = setTimeout('update()', 16);
}
