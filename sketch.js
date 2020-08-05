
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var scores = 0;
var bg = "sunny sky.jpg";
function preload(){
  getBackgroundImg();
}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
    world = engine.world;
    var options ={
      isStatic: true
    }
    polygon = new hexagon(150,200,40,40);
    ground1 = new Ground(400,height,800,20 );
    platform = new Ground(350,200,220,10);
    platform2 = new Ground(600,100,125,10);
   //1 level
    box1 = new Box(380,145,30,40);
    box2 = new Box(360,145,30,40);
    box3 = new Box(340,145,30,40);
    box4 = new Box(320,145,30,40);
    box5 = new Box(300,145,30,40);
    //box6 = new Box(270,145,30,40);
    //2 level
    box7 = new Box(400,115,30,40);
    box8 = new Box(360,115,30,40);
    box9 = new Box(340,115,30,40);
    box10 = new Box(309,115,30,40);
    //3 level
    box11 = new Box(360,105,30,40);
    box12 = new Box(340,105,30,40);
    //4 level 
   // box13 = new Box(350,100,30,40);
   //platform 2 boxes 
   
   //level 1
   box13 = new Box(580,95,30,40);
   box14 = new Box(610,95,30,40);
   box15 = new Box(640,95,30,40);
   //level 2
   box16 = new Box(600,65,30,40);
   box17 = new Box(620,65,30,40);
   chain = new constraint(polygon.body,{x:100,y:200})
  }

function draw() {
  rectMode(CENTER);
  if (backgroundImg)
  background(backgroundImg);  
  textSize(25);
  fill("white");
  text("Score: "+ scores, 100,100);
  Engine.update(engine);
  
  
  polygon.display();
  ground1.display();
  
  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  //box6.display();
  box5.score();
 box7.display();
 box7.score();
 box8.display();
 box8.score();
 box9.display();
 box9.score();
 box10.display();
 box10.score();
box11.display();
box11.score();
box12.display();
box12.score();
box13.display();
box13.score();
box14.display();
box14.score();
box15.display();
box15.score();
box16.display();
box16.score();
box17.display();
box17.score();
  platform.display();
  platform2.display();
  chain.display();

  
 
  // box3.score();
  // box4.score();
  // box5.score();
  // box6.score();
  // box7.score();
  // box8.score();
  // box9.score();
  // box10.score();
  // box11.score();
  // box12.score();
  // box13.score();
  // box14.score();
  // box15.score();
  // box16.score();
  // box17.score();
  
  drawSprites();
}



function mouseDragged(){
	Matter.Body.setPosition(polygon.body,{x:mouseX, y:mouseY});
}


function mouseReleased(){
  chain.Fly();
  //Matter.Body.applyForce(polygon.body, polygon.body.position,{x:200,y:200})
}

function keyPressed(){
  if (keyCode === 32){
    chain.attach(polygon.body);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  // console.log(responseJSON);
  var datetime = responseJSON.datetime;
//console.log(datetime);
var hour = datetime.slice(11,13);
//console.log(hour);
if(hour>=0600 && hour<=1900){
  bg = "sunny sky.png";
}
else{
  bg = "night sky.jpg";
}

backgroundImg = loadImage(bg);
}