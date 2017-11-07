Animado.prototype = new Actor();
function Animado() {
  // Propiedades
  this.velocidad;
  this.velocidad;

  // Metodo
  this.mover = function() {
    //Logica
      this.posX += Math.cos(this.rotZ) * this.velocidad;
      this.posY += Math.sin(this.rotZ) * this.velocidad;
  }

  this.dibuja = function() {
    contexto1.drawImage(imagenCoche, this.posX, this.posY, 32, 32);
  }
}