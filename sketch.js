const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1, stand1, ground1;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18;
var polygon1, slingShot;
var score = 0;
var backgroundImg;
var gameState = "on slingshot";
var bg = "Sprites/bg.jpg";

function preload() {
  getBackgroundImg();
  backgroundImg = loadImage("bg.jpg");
}

function setup() {
  createCanvas(1020,600);
  engine = Engine.create();
  world = engine.world;

  createSprite(400, 200, 50, 50);

  stand1 = new Ground(490,height - 300,200,20);
  stand2 = new Ground(750,height - 400,200,20);
  ground1 = new Ground(400,height + 50,800,20);

  box1 = new Box(430, 235, 30, 40);
  box2 = new Box(460, 235, 30, 40);
  box3 = new Box(490, 235, 30, 40);
  box4 = new Box(520, 235, 30, 40);
  box5 = new Box(550, 235, 30, 40);

  box6 = new Box(460, 195, 30, 40);
  box7 = new Box(490, 195, 30, 40);
  box8 = new Box(520, 195, 30, 40);

  box9 = new Box(490, 185, 30, 40);

  box10 = new Box(690, 135, 30, 40);
  box11 = new Box(720, 135, 30, 40);
  box12 = new Box(750, 135, 30, 40);
  box13 = new Box(780, 135, 30, 40);
  box14 = new Box(810, 135, 30, 40);

  box15 = new Box(720, 85, 30, 40);
  box16 = new Box(750, 85, 30, 40);
  box17 = new Box(780, 85, 30, 40);

  box18 = new Box(750, 55, 30, 40);

  polygon1 = new Polygon(100, 280, 40);

  slingShot = new SlingShot(polygon1.body, {x: 150, y: 150});
}

function draw() {
  if(backgroundImg) {
    background(backgroundImg);
}
  
  noStroke();
  textSize(20);
  fill("white");
  text("SCORE :" + score, 650, 40);
  text("Press the space key for another chance!", 400, 950);

  Engine.update(engine);

  stroke("black");

  fill("skyblue")
  box1.score();
  box1.display();
  box2.score();
  box2.display();
  box3.score();
  box3.display();
  box4.score();
  box4.display();
  box5.score();
  box5.display();

  fill("lime");
  box6.score();
  box6.display();
  box7.score();
  box7.display();
  box8.score();
  box8.display();

  fill("grey");
  box9.score();
  box9.display();

  fill("pink");
  box10.score();
  box10.display();
  box11.score();
  box11.display();
  box12.score();
  box12.display();
  box13.score();
  box13.display();
  box14.score();
  box14.display();

  fill("lightgreen");
  box15.score();
  box15.display();
  box16.score();
  box16.display();
  box17.score();
  box17.display();

  fill("grey");
  box18.score();
  box18.display();
  stand1.display();
  stand2.display()
  ground1.display();
  polygon1.display();
  slingShot.display();
}

function mouseDragged(){
  if(gameState!=="launched"){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
  }
}

function mouseReleased() {
  slingShot.fly();
  gameState = "launched";
}

function keyPressed() {
  if(keyCode === 32) {
      slingShot.attach(polygon1.body);
      gameState = "on slingshot";
  }
}

async function getBackgroundImg() {
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var date = responseJSON.datetime;
  var hour = date.slice(11, 13);
  if(hour>=06 && hour<=19){
      bg = "bg.jpg"
  } else {
      bg = "bg1.jpg"
  }
  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}