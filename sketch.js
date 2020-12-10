const Engine = Matter.Engine;
const World = Matter.World;
const Constraint = Matter.Constraint;
const Bodies = Matter.Bodies;

//global variables
var player;
var player_img;
var backgroundImg;
var weapon;
var weapon1_img, weapon2_img;
var engine,world;
var launcher;
var snake1,snake2; 
var bear1, lion1;
var box1,box2,box3, box4, log1,log2,log3,log4;
var gameState = "onSling";
var score = 0;
var pet1, pet2;

function preload(){
  //preloaded images in variables
  player_img = loadImage("images/player.png");
  backgroundImg = loadImage("images/backgroundmlight.jpg");
  weapon_img = loadImage("images/Weapon_1.png");
}

function setup(){
    createCanvas(displayWidth - 5, displayHeight - 145);
    //createCanvas(displayWidth,400);
    engine = Engine.create();
    world = engine.world;

    //World.add(world, weapon);
    weapon = new Weapon(50, 200, 10);

    launcher = new Launcher(weapon.body, {x: 135, y: 580});

    snake1 = new Snake(1320,590, 50);
    snake2 = new Snake(1310,680, 50);

    bear1 = new Bear(1120,640);
    lion1 = new Lion(1020,640);

    box1 = new Box(displayWidth - 80,displayHeight-190,70,70);
    box2 = new Box(displayWidth - 300,displayHeight-190,70,70);
    box3 = new Box(displayWidth - 80,displayHeight-275,70,70);
    box4 = new Box(displayWidth - 300,displayHeight-275,70,70);
    box5 = new Box(displayWidth - 195,displayHeight-360,70,70);

    log1 = new Log(displayWidth - 190,displayHeight-230, 300, 90);

    //log1 = new Log(810,260,100, 90);
    log2 =  new Log(displayWidth - 190,displayHeight-320, 300, 90);
    log3 = new Log(displayWidth - 145,displayHeight-390, 150, 320);
    log4 = new Log(displayWidth - 245,displayHeight-390, 150, 220);

    pet1 = new Pet(1360,670);
    pet2 = new Pet(1380,590);

    player = new Weapon(displayWidth/10, displayHeight/2, 30);
}

function draw(){
  background(backgroundImg);
  
  noStroke();
  textSize(35);
  fill("white");
  text("Score  " + score, width-300, 50);

  //imageMode(CENTER); 
  //image(weapon_img ,weapon.position.x, weapon.position.y, 40, 40);

    snake1.display();
    snake2.display();
    
    snake1.score();
    snake2.score();

  bear1.display();
  bear1.score();
  
  lion1.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    pet1.display();
    pet2.display();
    weapon.display();

    detectcollision(weapon, lion1);
    detectcollision(weapon, bear1);
    detectcollision(weapon, snake1);
    detectcollision(weapon, snake2);

  image(player_img ,displayWidth/10,displayHeight/2);
  launcher.display();
}

function mouseDragged(){
 Matter.Body.setPosition(weapon.body, {x: mouseX , y: mouseY});
 launcher.fly();
}


function mouseReleased(){
   //launcher.fly();
   gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(weapon.body,{x: 200, y: 50});
    launcher.attach(weapon.body);
  }
}

function detectcollision(lstone,lanimals){
  animalsBodyPosition=lanimals.body.position;
  stoneBodyPosition=lstone.body.position;

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,animalsBodyPosition.x,animalsBodyPosition.y);
//console.log(distance);
//console.log(lanimals.width + lstone.width);
if(distance<=lanimals.diameter+lstone.diameter)
{
  console.log("test1");
  Matter.Body.setStatic(lanimals.body,false);
}
}