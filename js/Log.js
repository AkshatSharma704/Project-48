class Log extends BaseClass{
    constructor(x,y,height,angle){
      super(x,y,20,height,angle);
      this.image = loadImage("images/log.png");
      Matter.Body.setAngle(this.body, angle);
    }
  }