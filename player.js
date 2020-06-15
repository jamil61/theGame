class Player {
    constructor() {
        this.img = loadImage('assets/8925.png')
        this.x = width;
        this.y = height + 400;
        this.vy = 0;
        this.health = 30
        this.shotSound = loadSound('audio/Smith-&-Wesson-500-Magnum-Far-Single-Gunshot-C-www.fesliyanstudios.com.mp3')
    }
    jump() {
        this.y -= 5;
    }
    shoot() {
        return Math.floor(Math.random() * 6)

    }
    draw() {
        image(this.img, this.x, this.y, 85, 85)
    }
    recieveDamage(damage) {
        this.health -= damage;
    }
}
class Trump {
    constructor() {
        this.img = loadImage('assets/clipart1799679.png')
        this.x = 800;
        this.y = height + 400;
        this.vy = 0;
        this.health = 25
        this.gravity = 0.4;
        this.jumpCount = 0;
        this.originY = this.y;
    }
   
    jump() {
        if(this.jumpCount<2){
            this.vy = -12;
            this.jumpCount += 1;
              this.y -= Math.floor(Math.random() * (-10))
        }
      
    }
    shoot() {
        return Math.floor(Math.random() * 6)
    }
    draw() {
        if(frameCount%120==0){
            this.jump()
        }
        image(this.img, this.x, this.y, 85, 85)
    }
}