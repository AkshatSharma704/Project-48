class Lion extends BaseClass {
    constructor(x, y){
      super(x,y,100,100);
      this.image = loadImage("images/lion1.jpg");
    }
    display(){
        //console.log(this.body.speed);
        if(this.body.speed < 3){
            super.display();
        }
           else{
             World.remove(world, this.body);
             push();
             this.Visiblity = this.Visiblity - 5;
             tint(255,this.Visiblity);
             image(this.image, this.body.position.x, this.body.position.y, 200, 200);
             pop();
           }
  
  }
 
}