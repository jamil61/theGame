class Game {
  constructor() {}
  init() {
    this.background = new Background();
    this.player = new Player();
    this.trump = new Trump();
    // this.sound = loadSound('./audio/WildWest_a01.mp3')
  }

  draw() {
    this.background.draw();
    this.player.draw();
    this.trump.draw()
  }

  setup() {
    this.player.setup();
  }
}