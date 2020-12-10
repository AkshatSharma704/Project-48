class Weapon {
  constructor(x,y,diameter) {
    var options = {
        isStatic: true,
        restitution:0,
        friction:1,
        density:1.2
    }
    this.body = Bodies.circle(x,y,diameter,options);
    this.diameter = diameter;
    this.stone1 = loadImage("images/Weapon_1.png");
    World.add(world, this.body);
  } 

  display(){
    push();
    var pos =this.body.position;
    image(this.stone1,pos.x,pos.y,60,60);
    imageMode(CENTER);
    pop();
  }
}