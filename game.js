class Game {
  constructor() {}
  init() {
    this.background = new Background();
    this.player = new Player();
    this.trump = new Trump();
    this.bullets=[];
    this.Tbullets=[];
    this.winImg=loadImage('assets/dcdipzl-83b3f153-e48b-45c3-ba71-5e608a9840e2.png')
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