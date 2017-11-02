/**
 * Declaracion de condiciones de inicio
 */
var myCanvas = document.getElementById('fish');
var context = myCanvas.getContext('2d');


var temp;

var botX = new Array();
var botY = new Array();
var red = new Array();
var green = new Array();
var blue = new Array();
var velocity = new Array();
var size = new Array();
var dir = new Array();

for(i = 0; i<20; i++) {
  botX[i] = Math.random() * 512;
  botY[i] = Math.random() * 512;
  red[i] = (Math.round(Math.random() * 255));
  green[i] = (Math.round(Math.random() * 255));
  blue[i] = (Math.round(Math.random() * 255));
  velocity[i] = Math.random() * 10;
  size[i] = Math.random() * 100;
  dir[i] = Math.random() * Math.PI*2;
}


var fishImg = new Image();
fishImg.src = './img/fish.png';

var undersea = new Image();
undersea.src = './img/undersea.jpeg';

initialize();

/**
 * @method init  initialize function
 */
function initialize() {
  temp = setTimeout('update()', 16);
  update();
}

/**
 * @method update loop function
 */
function update() {
  context.clearRect(0, 0, 512, 512);
  context.drawImage(undersea, 0, 0, 512, 512);
  
  for(i=0; i<20; i++) {
    context.drawImage(fishImg, botX[i], botY[i], size[i], size[i]);
    botX[i] += (Math.cos(dir[i])) * velocity[i];
    botY[i] += (Math.sin(dir[i])) * velocity[i];
    dir[i] += (Math.random()-0.5) * 0.1;

    if (botX[i] > 512) {
      botX[i] = 512;
      dir[i] += Math.PI; // Da la vuelta 
    } else if (botX[i] < 0) {
      botX[i] = 0;
      dir[i] += Math.PI; // Da la vuelta 
    }

    if (botY[i] > 512) {
      botY[i] = 512;
      dir[i] += Math.PI; // Da la vuelta 
    } else if (botY[i] < 0) {
      botY[i] = 0;
      dir[i] += Math.PI; // Da la vuelta 
    }
    
  }
  
  clearTimeout(temp);
  temp = setTimeout('update()', 16);
}