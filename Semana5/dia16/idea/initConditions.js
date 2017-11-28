const canvas = document.getElementById('lienzo1');
const context = canvas.getContext('2d');

let numWorms = 10;
let worms = new Array();
let workers = new Array();

init();