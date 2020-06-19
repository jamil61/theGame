class Bullet {
    constructor() {
        this.img = loadImage('assets/script1.png');
        this.x = 0;
        this.player = new Player;
        this.y = this.player.y - 40;
    }
    move() {
        this.x += 20;
    }
    draw() {
        push()
        image(this.img, this.x, this.y, 30, 30)
        this.move();
        pop()
    }
    checkCollision(trump) {
        let d = dist(trump.x + 85 / 2, trump.y + 85 / 2, this.x + 30 / 2, this.y + 30 / 2)
        if (d < 30) {
            gameWin++
        }
    }
}

class TrumpBullet {
    constructor() {
        this.img = loadImage('assets/shootright1.png');
        this.x = width - 80;
        this.trump = new Trump();
        this.player = new Player();
        this.y = height - 40;
    }
    move() {
        this.x -= 20;
    }
    draw() {
        push()
        image(this.img, this.x, this.y, 30, 30)
        this.move();
        pop()
    }
    checkCollision(player) {
        let d = dist(player.x + 85 / 2, player.y + 85 / 2, this.x + 30 / 2, this.y + 30 / 2)
        if (d < 20) {
            gameOver++
        }
    }
}