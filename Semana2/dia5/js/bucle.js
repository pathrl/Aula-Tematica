function bucle() {
  contexto1.clearRect(0, 0, 512, 512);
  coche1.combustible--;
  // contexto1.drawImage(imagenCoche, 5, 5, 32, 32);
  coche1.rotZ = (Math.random() - 0.5) * 1;
  if(coche1.combustible > 0) {
    coche1.mover();
  }
  coche1.dibuja();

  clearTimeout(temp);
  temp = setTimeout('bucle()', 50);
}