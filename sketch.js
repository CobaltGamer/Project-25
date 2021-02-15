
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var paper;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground();
	paper = new Paper(40,680,40);
	dustbin = new Dustbin(600,680,70,100);


  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);

  ground.display()
  paper.display()
  dustbin.display()	

  
  drawSprites();
 
}
function keyPressed() 
{ if (keyCode === UP_ARROW) {
	 Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60}); } 
	}


