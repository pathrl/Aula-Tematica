function loadImage(ctx, image, posX, posY, width, heigth, src) {
  image.onload = function(){
    ctx.drawImage(image, posX, posY, width, heigth);
  }
  image.src = src;
}
