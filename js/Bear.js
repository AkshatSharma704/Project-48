class Bear extends BaseClass {
    constructor(x, y){
      super(x,y,100,100);
      this.image = loadImage("images/bear1.png");
      this.Visiblity = 255;
    }
  
    display(){ 
      //console.log(this.body.speed); 
      if(this.body.speed <3){ 
        var angle = this.body.angle; 
        var pos= this.body.position; 
        push(); 
        translate(pos.x, pos.y); 
        rotate(angle); 
        imageMode(CENTER); 
        image(this.image, 0, 0, this.width, this.height); 
        pop(); 
      } else{ 
        World.remove(world, this.body); 
        push(); 
        this.visibility = this.visibility -5; 
        pop(); 
      } 
    }

    score(){
      if (this.Visiblity < 0 && this.Visiblity > -1005){
        score++;
      }
    }  
    
  }