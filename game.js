class Game {
  constructor() {}
  init() {
    this.background = new Background();
    this.player = new Player();
    this.trump = new Trump();
    this.bullets=[];
    // this.sound = loadSound('./audio/WildWest_a01.mp3')
  }

  draw() {
    this.background.draw();
    this.player.draw();
    this.trump.draw();
    this.bullets.forEach(bullet=>bullet.draw())
  }

  setup() {
    this.player.setup();
  }
}