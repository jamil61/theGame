class Player {
  constructor() {
    this.img = loadImage('assets/8925.png')
    this.x = width;
    this.y = height;
    this.health = 30
    this.shotSound = loadSound('audio/Smith-&-Wesson-500-Magnum-Far-Single-Gunshot-C-www.fesliyanstudios.com.mp3')
    this.velocity = 15;
    this.gravity = 0.4;
    this.jumps = 0;
    this.jumpSound = loadSound('audio/jump-sound.mp3');
  }
  setup() {}
  jump() {
    this.jumps += 1;
    if (this.jumps < 2) {
      this.velocity = -9;
      this.jumpSound.play();
    }
  }
  shoot() {
    this.shotSound.play()
  }
  draw() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    if (this.y >= height - 85) {
      this.y = height - 85;
      this.jumps = 0;
    }
    image(this.img, this.x, this.y, 85, 85)
 
    console.log('this is the y,', this.y, this.img.height)
  }
  // recieveDamage(damage) {
  //     this.health -= damage;
  // }
}
class Trump {
  constructor() {
    this.img = loadImage('assets/clipart1799679.png')
    this.x = 800;
    this.y = height + 400;
    this.health = 25
    this.gravity = 0.4;
    this.jumpCount = 0;
    this.velocity = 10;
  }
  jump() {
    if (this.jumpCount < 2) {
      this.velocity = -9;
      this.jumpCount += 1;
    }
  }
  shoot() {
  }
  draw() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    if (this.y >= height - 85) {
      this.y = height - 85;
      this.jumpCount = 0;
    }
    if (frameCount % 120 == 0) {
      this.jump()
    }
    image(this.img, this.x, this.y, 85, 85)
  }
}