
class Bullet{
constructor(){
    this.img=loadImage('assets/bullet1.png');
    this.x=0;
    this.player=new Player()
    this.y=this.player.y-40;
    this.start=false;
}
move(){
    this.x+=20;
}
draw(){
    push()
    console.log(this.y)
    image(this.img,this.x,this.y,30,30)
    this.move();
    pop()
}
}