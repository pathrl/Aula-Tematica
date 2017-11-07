const lienzo1 = document.getElementById('lienzo1');
const contexto1 = lienzo1.getContext('2d');

let imagenCoche = new Image();
imagenCoche.src = './img/car.png';

let coche1;
let temp;

inicio();