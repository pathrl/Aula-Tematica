const canvas = document.getElementById('bot');
const ctx = canvas.getContext('2d');
const numBots = 10;
let bots = new Array();

for(i = 0; i < numBots; i++) {
  let bot = new Bot();
  bot.posX = Math.random() * 512;
  bot.posY = Math.random() * 512;
  bot.velocity = Math.random() * 10;
  bot.angle = Math.random() * Math.PI * 2;
  bots.push(bot);
}
console.log(bots);

var temp = setTimeout('update()', 50);

function update() {
  ctx.clearRect(0, 0, 512, 512);
  for( i = 0; i < numBots; i++) {
    bots[i].moveBot();
  }
  clearTimeout(temp);
  temp = setTimeout('update()', 50);
}