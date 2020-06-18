let sound;
let numberOfShots = 6;
let gameOver = 0;
let gameWin = 0;
let winSound;
let gameStart = false;

function gameOverPlus() {
  console.log('game over function')
  setTimeout(() => gameOver = 1, 3000)
}
const game = new Game();

function preload() {
  console.log("Preload");
  winSound = loadSound('audio/AudioCutter_mp3_20200618094438032_by_vidcompact.mp3');
  game.init();
}

function setup() {
  createCanvas(960, 500);
  sound = loadSound('audio/AudioCutter_AudioCutter_WildWest_a01.mp3', loaded)
}

function loaded() {
  console.log(gameOver)
  sound.setVolume(0.5)
  sound.play()
}

function draw() {

  console.log(numberOfShots, gameOver)
  if (gameStart === false) {

  } else if (gameStart && gameWin === 0 && gameOver === 0) {
    game.draw();

    if (frameCount % 50 === 0) {
      game.Tbullets.push(new TrumpBullet())
      game.trump.shoot()
    }
  } else if (gameWin > 0) {
    image(game.winImg, 0, 0, width, height)
  }

  if (numberOfShots === 0) {
    console.log('out of shots')

    gameOverPlus()

  }
  if (gameOver > 0) {
    console.log('you lose')
    image(game.winImg, 0, 0, width, height)
  }
  text('Bullts left' + ' ' + numberOfShots, 10, 20)
}

function keyPressed() {
  if (keyCode === 32) {

    game.player.jump();
  }
  if (keyCode === 13 && numberOfShots > 0 && game.player.y == height - 85) {
    game.bullets.push(new Bullet())
    game.player.shoot()
    numberOfShots--;
  }
  if (keyCode === 65) {
    gameStart = true;
  }
  if (keyCode === 32 && gameOver > 0) {
    window.location.reload()
  }
}