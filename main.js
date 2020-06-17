let sound;
let numberOfShots=6;
let gameOver=0;
let gameWin=0;
const game = new Game();
let gameStart=true;
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
  console.log(gameOver,gameWin)
  if(gameStart&&gameWin===0&&gameOver===0){
    game.draw();
    if(frameCount%80===0){
     game.Tbullets.push(new TrumpBullet())
     game.trump.shoot()
   }
  }
  
  else if(gameStart&&gameWin>0){
console.log('you win')

  }else if(gameStart&&gameOver>0&&numberOfShots===0){
    console.log('you lose')
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