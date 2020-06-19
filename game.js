class Game {
  constructor() {}
  init() {
    this.background = new Background();
    this.player = new Player();
    this.trump = new Trump();
    this.bullets=[];
    this.Tbullets=[];
    this.winImg=loadImage('assets/WIN.png')
    this.loseImg=loadImage('assets/LOSE.png')
  }

  draw() {
    this.background.draw();
    this.player.draw();
    this.trump.draw();
    this.bullets.forEach(bullet=>bullet.draw())
    this.Tbullets.forEach(bullet=>bullet.draw())
    this.bullets.forEach(bullet=>bullet.checkCollision(this.trump))
    this.Tbullets.forEach(bullet=>bullet.checkCollision(this.player))
  }

  setup() {
    this.player.setup();
  }
}