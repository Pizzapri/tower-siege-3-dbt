const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,stand1,stand2;
var polygon,polyImg;

var b11,b12,b13,b14,b15,b16,b17;
var b18,b19,b110,b111,b112;
var b113,b114,b115;
var b116;
 
var b21,b22,b23,b24,b25,b26,b27;
var b28,b29,b210,b211,b212;
var b213,b214,b15;
var b216;

var sling;

var bgImg;

var gameState = "onSling";

var score=0

function preload(){
  polyImg=loadImage("imgs/poly.png");
  getBGimg();
}

function setup() {
    createCanvas(700,350);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(350,349,700,2);
    stand1=new Ground(300,307,250,8);
    stand2=new Ground(560,197,220,8);

    b11=new Box1(210,290,30,40);
    b12=new Box1(240,290,30,40);
    b13=new Box1(270,290,30,40);
    b14=new Box1(300,290,30,40);
    b15=new Box1(330,290,30,40);
    b16=new Box1(360,290,30,40);
    b17=new Box1(390,290,30,40);

    b18=new Box2(240,242.9,30,40);
    b19=new Box2(270,242.9,30,40);
    b110=new Box2(300,242.9,30,40);
    b111=new Box2(330,242.9,30,40);
    b112=new Box2(360,242.9,30,40);

    b113=new Box3(270,202,30,40);
    b114=new Box3(300,202,30,40);
    b115=new Box3(330,202,30,40);

    b116=new Box4(300,161,30,40);


    b21=new Box1(470,172,30,40);
    b22=new Box1(500,172,30,40);
    b23=new Box1(530,172,30,40);
    b24=new Box1(560,172,30,40);
    b25=new Box1(590,172,30,40);
    b26=new Box1(620,172,30,40);
    b27=new Box1(650,172,30,40);

    b28=new Box2(500,131.5,30,40);
    b29=new Box2(530,131.5,30,40);
    b210=new Box2(560,131.5,30,40);
    b211=new Box2(590,131.5,30,40);
    b212=new Box2(620,131.5,30,40);

    b213=new Box3(530,91,30,40);
    b214=new Box3(560,91,30,40);
    b215=new Box3(590,91,30,40);

    b216=new Box4(560,50,30,40);

    polygon=Bodies.circle(150,190,20);
    World.add(world,polygon);

    sling=new slingshot(this.polygon,{x:150,y:190});
  }
  
  function draw() {
    if(bgImg){
      background(bgImg);
      } 
    Engine.update(engine);

    imageMode(CENTER);
    image(polyImg,polygon.position.x,polygon.position.y,50,50);

    ground.display();
    stand1.display();
    stand2.display();

    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    b19.display();
    b110.display();
    b111.display();
    b112.display();
    b113.display();
    b114.display();
    b115.display();
    b116.display();
    b21.display();
    b22.display();
    b23.display();
    b24.display();
    b25.display();
    b26.display();
    b27.display();
    b28.display();
    b29.display();
    b210.display();
    b211.display();
    b212.display();
    b213.display();
    b214.display();
    b215.display();
    b216.display();


    b11.score();
    b12.score();
    b13.score();
    b14.score();
    b15.score();
    b16.score();
    b17.score();
    b18.score();
    b19.score();
    b110.score();
    b111.score();
    b112.score();
    b113.score();
    b114.score();
    b115.score();
    b116.score();
    b21.score();
    b22.score();
    b23.score();
    b24.score();
    b25.score();
    b26.score();
    b27.score();
    b28.score();
    b29.score();
    b210.score();
    b211.score();
    b212.score();
    b213.score();
    b214.score();
    b215.score();
    b216.score();

    sling.display();

    drawSprites();
    
    fill("#000000");
    noStroke();
    textSize(20);
    text("Launch the Sun into the mountains",30,40);

    fill(250);
    text("score="+score,580,320)
  }

function mouseDragged(){
    if (gameState=="onSling"){
        Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    sling.fly();
    gameState = "launched";
}

function keyPressed(){
  if(keyCode===32){
    sling.attach(this.polygon);
    gameState="onSling";
  }
}

async function getBGimg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1600){
      bg ="imgs/sunrise.jpg";
  }
  else{
      bg = "imgs/sunset.jpg";
  }

  bgImg = loadImage(bg);
  console.log(bgImg);
}
