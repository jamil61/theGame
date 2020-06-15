let sound;
const game = new Game;


function preload() {
  console.log("Preload");
  game.init();
}

function setup() {
  createCanvas(960, 500);
  sound = loadSound('audio/WildWest_a01.mp3', loaded)
  // game.setup();
}

function loaded() {
  console.log('hello')
  sound.play()
}

function draw() {
  game.draw();
}

function keyPressed() {
  if (keyCode === 32) {
    console.log('jumping');
    game.player.jump();
  }
}