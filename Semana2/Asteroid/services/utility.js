function loadImage(ctx, image, src, posX, posY, width, heigth) {
  image.onload = function(){
    ctx.drawImage(image, posX, posY, width, height);
  }
  image.src = src;
}

/* ROTAR IMAGEN
  context.translate(x, y);
  context.rotate(angleInRadians);
  context.drawImage(image, -width / 2, -height / 2, width, height);
  context.rotate(-angleInRadians);
  context.translate(-x, -y);
*/