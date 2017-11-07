Ship.prototype = new Actor();

function Ship() {
  //Attributes
  this.image = new Image();
  this.angle = Math.random() * Math.PI * 2;
  this.velocity = 10;
  
  this.moveRightShip = function() {
    this.angle += Math.PI * 0.5;
  }

  this.moveLeftShip = function() {
    this.angle -= Math.PI * 0.5;
  }
}