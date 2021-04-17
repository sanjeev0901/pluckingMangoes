const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject;
var mango1,mango2,mango3,mango4,mango5;
var world,boy,stone1;
var slingShot1;
slingForce=100;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1150,200,30);
	mango3=new mango(1050,250,30);
	mango4=new mango(1000,50,30);
	mango5=new mango(950,100,30);
	mango6=new mango(900,200,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stone1=new stone(150,320,20);

	slingShot1=new slingShot(stone1.body,{x:135,y:270});
  

	Engine.run(engine);
}

function draw() {

  background(230);
  //Add code for displaying text here!
  fill("green");
  textSize(40);
  text("Press Space To Get Second Chance",20,40);
  imageMode(CENTER);
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone1.display();

  slingShot1.display();
  groundObject.display();

  detectollision(stone1,mango1);
  detectollision(stone1,mango2);
  detectollision(stone1,mango3);
  detectollision(stone1,mango4);
  detectollision(stone1,mango5);
  detectollision(stone1,mango6);
}

function mouseDragged(){
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot1.fly();
}

function keyPressed(){
  Matter.Body.setPosition(stone1.body,{x:235,y:430});
  slingShot1.attach(stone1.body);
}

function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position;
  stoneBodyPosition=lstone.body.position;

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  }
}
