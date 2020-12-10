class Snake {
  constructor(x,y,diameter) {
    var options = {
        isStatic: true,
        restitution:0,
        friction:1,
    }
    this.body = Bodies.circle(x,y,diameter,options);
    this.diameter= diameter;
    this.image = loadImage("images/snake1.png");
    this.Visiblity = 255;
    World.add(world, this.body);
  }
  display(){
    push();
    var pos =this.body.position;
    image(this.image,pos.x,pos.y,this.diameter,this.diameter);
    imageMode(CENTER);
    pop();
  }
  
  score(){
    console.log(this.Visiblity);

    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  }
}