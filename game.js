class Game {
  constructor() {}
  init() {
    this.background = new Background();
    this.player = new Player();
    this.trump = new Trump();
    this.bullets=[];
    this.Tbullets=[];
    // this.sound = loadSound('./audio/WildWest_a01.mp3')
  }

  draw() {
    this.background.draw();
    this.player.draw();
    this.trump.draw();
    this.bullets.forEach(bullet=>bullet.draw())
    this.Tbullets.forEach(bullet=>bullet.draw())
    this.bullets.forEach(bullet=>bullet.checkCollision(this.trump))
  }

  setup() {
    this.player.setup();
  }
}