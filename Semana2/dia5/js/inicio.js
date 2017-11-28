function inicio() {
  coche1 = new Coche();
  coche1.posX = 256;
  coche1.posY = 256;
  coche1.rotZ = Math.random() * Math.PI * 2;
  coche1.velocidad = Math.random() * 10;
  coche1.combustible = 100;
  console.log(coche1.existo());
  temp = setTimeout('bucle()', 50);
  update();
}