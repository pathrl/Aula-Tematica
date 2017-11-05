/**
 * Canvas
 */
const canvasObject = document.getElementById("object");
let contextObject = canvasObject.getContext("2d");
contextObject.canvas.width = 512;
contextObject.canvas.height = 512;
contextObject.fillStyle = "orange";

/**
 * Init datas
 */
let tempObs;
let obstacles = [];
const totalObstacles = 10;

const postionsX = [220, 170, 270];
const postionsY = [95, 365, 245];

initialize();


/**
 * @method initialize init method
 */
function initialize() {
  for(i=0; i < totalObstacles; i++){
    const obstacle = {
      posX: postionsX[i],
      posY: postionsY[i],
      dir: Math.PI * 2,
      vel: 1,
      height: 10,
      width: 10,
    };
    obstacles.push(obstacle);
  }

  tempObs = setTimeout("update()", 18);
  update();
}

/**
 * @method update loop method
 */
function update() {
  contextObject.clearRect(0, 0, contextObject.canvas.width, contextObject.canvas.height);

  for (i = 0; i < totalObstacles; i++) {
    const auxX = obstacles[i].posX + (obstacles[i].width / 2) + Math.cos(obstacles[i].dir) * obstacles[i].vel; // Miro hacia donde voy en X
    const auxY = obstacles[i].posY + (obstacles[i].height / 2) + Math.sin(obstacles[i].dir) * obstacles[i].vel; // Miro hacia donde voy en Y
    const color = ctx.getImageData(auxX, auxY, 1, 1); // Miro el color en ese punto
    
    if (color.data[0] != 255) { //Colisión
      obstacles[i].dir += Math.random() * 4 * (Math.PI / 2);
    } else {
      obstacles[i].posX += Math.cos(obstacles[i].dir) * obstacles[i].vel;
      obstacles[i].posY += Math.sin(obstacles[i].dir) * obstacles[i].vel;
    }

    contextObject.fillRect(obstacles[i].posX, obstacles[i].posY, obstacles[i].width, obstacles[i].height);
  }
  
  clearTimeout(tempObs);
  tempObs = setTimeout("update()", 1000/60);
}
