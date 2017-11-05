/**
 * Declaracion de condiciones de inicio
 */
var myCanvas = document.getElementById('background');
var context = myCanvas.getContext('2d');

var temp;
var fishes = new Array;

var fishImg = new Image();
fishImg.src = './img/fish.png';

initialize();

/**
 * @method init  initialize function
 */
function initialize() {
  temp = setTimeout('update()', 16);

  for(i = 0; i<20; i++) {
    var fish = {
      img: fishImg,
      posX: Math.random() * 512,
      posY: Math.random() * 512,
      velocity: Math.random() * 10,
      size: Math.random() * 100,
      direction: Math.random() * Math.PI * 2,
    };

    fishes.push(fish);
  }
  
  update();
}

/**
 * @method update loop function
 */
function update() {
  context.clearRect(0, 0, 512, 512);

  for(i=0; i<20; i++) {
    context.drawImage(fishes[i].img, fishes[i].posX, fishes[i].posY, fishes[i].size, fishes[i].size);
    fishes[i].posX += (Math.cos(fishes[i].direction)) * fishes[i].velocity;
    fishes[i].posY += (Math.sin(fishes[i].direction)) * fishes[i].velocity;
    fishes[i].direction += (Math.random()-0.5) * 0.1;

    checkBordes(fishes[i]);
    checkPostion(fishes[i]);
    
  }
  
  clearTimeout(temp);
  temp = setTimeout('update()', 16);
}

/**
 * @method checkBordes Comprueba que el pez esta dentro del canvas
 * @param {Object} fish Fish Item
 */
function checkBordes(fish) {
  if (fish.posX > 512) {
      fish.posX = 512;
      fish.direction += Math.PI; // Da la vuelta 
    } else if (fish.posX < 0) {
      fish.posX = 0;
      fish.posX += Math.PI; // Da la vuelta 
    }

    if (fish.posY > 512) {
      fish.posY = 512;
      fish.direction += Math.PI; // Da la vuelta 
    } else if (fish.posY < 0) {
      fish.posY = 0;
      fish.direction += Math.PI; // Da la vuelta 
    }
}

/**
 * @method checkPosition
 * 
 */
function checkPostion() {

}