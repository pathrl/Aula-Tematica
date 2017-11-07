Ship.prototype = new Actor();

function Ship() {
  //Attributes
  this.image = new Image();
  this.angle = Math.random() * Math.PI * 2;
  this.velocity = 1;
  this.width = 60;
  this.height = 60;
  
  this.moveRight = function() {
    this.angle += Math.PI * 0.125;
    this.posX += Math.cos(this.angle) * this.velocity
    this.posY += Math.sin(this.angle) * this.velocity
  }

  this.moveLeft = function() {
    this.angle -= 2 * Math.PI * 0.125;
    this.posX += Math.cos(this.angle) * this.velocity
    this.posY += Math.sin(this.angle) * this.velocity
  }
}