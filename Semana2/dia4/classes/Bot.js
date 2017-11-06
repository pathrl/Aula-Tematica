function Bot() {
  this.posX;
  this.posY;
  this.velocity;
  this.angle;

  this.moveBot = function() {
    this.posX += Math.cos(this.angle) * this.velocity;
    this.posY += Math.sin(this.angle) * this.velocity;
    ctx.fillRect(this.posX, this.posY, 5, 5);
  }
}