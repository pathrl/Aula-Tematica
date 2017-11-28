function init() {
  for(let i = 0; i < numWorms; i++) {
    var x = Math.round(Math.random() * 512);
    var y = Math.round(Math.random() * 512);
    var angle = 2 * Math.PI *Math.random();
    var color = {
      red: Math.round(Math.random() * 255),
      blue: Math.round(Math.random() * 255),
      green: Math.round(Math.random() * 255),
    }
    worms[i] = new worms();
    worms[i].constructor(x, y, angle, color);

    //Send Worm to update
    workers[i].postMessage(worms[i]);

    //Receive Updated Worm
    workers[i].onmessage = function() {
      workers[i].drawWorm();
    }
  }
}