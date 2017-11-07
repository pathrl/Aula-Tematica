function Bot() {
  this.posX = Math.random() * 512;
  this.posY = Math.random() * 512;
  this.velocity = Math.random() * 10;
  this.angle = Math.random() * Math.PI * 2;
  this.red = Math.round(Math.random() * 255);
  this.green = Math.round(Math.random() * 255);
  this.blue = Math.round(Math.random() * 255);

  this.colisionBorder = function() {
    if(this.posX > 512) {
      this.posX = 512;
      this.angle += Math.PI;
    } else if (this.posX < 0) {
      this.posX = 0;
      this.angle += Math.PI;
    }

    if(this.posY > 512) {
      this.posY = 512;
      this.angle += Math.PI;
    } else if (this.posY < 0) {
      this.posY = 0;
      this.angle += Math.PI;
    }
  }

  this.moveBot = function() {
    this.angle += (Math.random() - 0.5) * 1;
    this.posX += Math.cos(this.angle) * this.velocity;
    this.posY += Math.sin(this.angle) * this.velocity;
    // `rgb(${this.red}, ${this.green}, ${this.blue})`
    ctx.fillStyle = "rgb(" + this.red + ", " + this.green + ", " + this.blue + ")";
    ctx.fillRect(this.posX, this.posY, 5, 5);
    this.colisionBorder();
  }
}