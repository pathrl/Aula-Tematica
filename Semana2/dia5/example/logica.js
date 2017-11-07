let canvasRed = document.getElementById('red');
let contextRed = canvasRed.getContext('2d');

let canvasBlue = document.getElementById('blue');
let contextBlue = canvasBlue.getContext('2d');

let canvasGreen = document.getElementById('green');
let contextGreen = canvasGreen.getContext('2d');

let imageRed = new Image();
imageRed.src = './img/red.jpg';

let imageBlue = new Image();
imageBlue.src = './img/blue.jpg';

let imageGreen = new Image();
imageGreen.src = './img/green.jpg';

setTimeout('initialize()', 1000);

function initialize(){
  contextRed.drawImage(imageRed, 0, 0);
  contextBlue.drawImage(imageBlue, 0, 0);
  contextGreen.drawImage(imageGreen, 0, 0);

  //Voy a copiar una imagen de un canvas a otro
  //Cojo un trozo del canvas azul
  let originalData = contextBlue.getImageData(10, 10, 30, 30);
  console.log(originalData);

  //Ahora quiero pegar ese elemento dentro del canvas rojo
  contextRed.putImageData(originalData, 20, 20);

}