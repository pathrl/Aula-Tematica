const canvas = document.getElementById('bot');
const ctx = canvas.getContext('2d');
let numBots = 1;
let bots = new Array();

for(i = 0; i < numBots; i++) {
  let bot = new Bot();
  bots.push(bot);
}

var temp = setTimeout('update()', 50);

$('canvas').click(function(event){
  console.log(event.pageX, event.pageY);
  let bot = new Bot();
  bot.posX = event.pageX;
  bot.posY = event.pageY;
  bots.push(bot);
  numBots = bots.length;
  
});

function update() {
  ctx.clearRect(0, 0, 512, 512);
  for( i = 0; i < bots.length; i++) {
    bots[i].moveBot();
  }
  clearTimeout(temp);
  temp = setTimeout('update()', 50);
}