let sound;
let numberOfShots=100;
const game = new Game();
let gameStart=false;
function preload() {
  console.log("Preload");
  game.init();
}

function setup() {
  createCanvas(960, 500);
  sound = loadSound('audio/AudioCutter_WildWest_a01.mp3', loaded)
  // game.setup();
}

function loaded() {
  console.log('hello')
  // sound.play()
}

function draw() {
  if(gameStart){};
   game.draw();
   if(frameCount%80===0){
    game.Tbullets.push(new TrumpBullet())
    game.trump.shoot()
  }
}

function keyPressed() {
  if (keyCode === 32) {
    console.log('jumping');
    game.player.jump();
  }
  if(keyCode===13&&numberOfShots>0&&game.player.y==height-85){
    game.bullets.push(new Bullet())
    game.player.shoot()
    numberOfShots--;
    console.log(numberOfShots)
  }
  
}